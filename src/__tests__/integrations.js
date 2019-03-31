import React from 'react'
import {mount} from 'enzyme'
import ReduxStore from 'root'
import App from 'components/App'
import moxios from 'moxios'


let component;

beforeEach(() => {
    component = mount(
        <ReduxStore>
            <App/>
        </ReduxStore>
    );
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',
        {
            status: 200,
            response: [{name: 'fetched #1'}, {name: 'fetched #2'}]
        })
});

afterEach(() => {
    moxios.uninstall();
    component.unmount();
});

it('can fetch a list of comments and display them', done => {
    component.find('.fetch-comments').simulate('click');
    moxios.wait(() => {
        component.update();
        expect(component.find('li').length).toEqual(2);
        done();
    })
});