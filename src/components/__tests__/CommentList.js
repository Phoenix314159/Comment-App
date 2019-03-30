import React from 'react'
import {mount} from 'enzyme'
import ReduxStore from 'root'
import CommentList from 'components/CommentList'

let component;
beforeEach(() => {
    const initialState = {
        comments: [
            'Comment 1',
            'Comment 2'
        ]
    };
    component = mount(
        <ReduxStore initialState={initialState}>
            <CommentList/>
        </ReduxStore>
    )
});

it('shows one "li" element per comment', () => {
   expect(component.find('li').length).toEqual(2)
});

it('shows the text for each comment', () => {
    expect(component.render().text()).toContain('Comment 1');
    expect(component.render().text()).toContain('Comment 2');
});