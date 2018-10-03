import React from 'react';
import {shallow} from 'enzyme';
//import toJSON from 'enzyme-to-json'; we removed this import because we set it up in config.
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render header correctly', () => {
    const wrapper = shallow(<Header />);
    //expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});