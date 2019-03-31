import React from 'react'
import {mount} from 'enzyme'
import ReduxStore from 'root'
import App from 'components/App'
import moxios from 'moxios'

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',
        {
            status: 200,
            response: [{name: 'fetched #1'}, {name: 'fetched #2'}]
        })
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
    const component = mount(
        <ReduxStore>
            <App/>
        </ReduxStore>
    );
    component.find('.fetch-comments').simulate('click');
    setTimeout(() => {
        component.update();
        expect(component.find('li').length).toEqual(2);
        done();
    },100)
    // expect(component.find('li').length).toEqual(2);
});