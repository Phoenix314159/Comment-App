import React from 'react'
import CommentBox from 'components/CommentBox'
import {mount} from "enzyme";

let component;

beforeEach(() => {
    component = mount(<CommentBox/>)
});

afterEach(() => {
    component.unmount()
});

it('has a form, text-area and button', () => {
    expect(component.find('form').length).toEqual(1);
    expect(component.find('textarea').length).toEqual(1);
    expect(component.find('button').length).toEqual(1);
});

describe('the textarea', () => {
    beforeEach(() => {
        component.find('textarea').simulate('change', {
            target: {value: 'new comment'}
        });
        component.update();
    });

    it('has a text area that users can type in', () => {
        expect(component.find('textarea').prop('value')).toEqual('new comment')
    });

    it('should empty textarea when input is submitted', () => {
        component.find('form').simulate('submit');
        component.update();
        expect(component.find('textarea').prop('value')).toEqual('');
    });
});

