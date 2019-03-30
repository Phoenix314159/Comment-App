import React from 'react'
// import ReactDOM from 'react-dom'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import {shallow} from 'enzyme'
// import ReduxStore from 'root'

let component;

beforeEach(() => {
    component = shallow(<App/>);
});
// it('renders without crashing', () => {
//     const div = mount(<ReduxStore><App/></ReduxStore>)
//     ReactDOM.render(component, div)
// })
it('shows the comment box', () => {
    expect(component.find(CommentBox).length).toEqual(1);
});

it('shows the comment list', () => {
    expect(component.find(CommentList).length).toEqual(1);
});