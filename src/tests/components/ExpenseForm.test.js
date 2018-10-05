import React from 'react';
import {shallow} from 'enzyme';
import ExpenseFrom from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'

test('should render expense form', ()=>{
    const wrapper = shallow(<ExpenseFrom/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense form with expense data', ()=>{
    const wrapper = shallow(<ExpenseFrom expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

