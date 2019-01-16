import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const result = expensesReducer(undefined, {type : '@@INIT'});
    expect(result).toEqual([]);
});

test('should remove expense by id', () => {
    const result = expensesReducer(expenses, {type : 'REMOVE_EXPENSE', id : expenses[1].id});
    expect(result).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses not exists', () => {
    const result = expensesReducer(expenses, {type : 'REMOVE_EXPENSE', id : -1});
    expect(result).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '3',
        description: 'Car',
        note: '',
        amount: 20200,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const amount = 122000;
    const action = {
        type:'EDIT_EXPENSE',
        id: expenses[1].id,
        updates:{
            amount
        }
    }
    const result = expensesReducer(expenses, action);
    expect(result[1].amount).toBe(amount);
});

test('should not edit if not found the espense', () => {
    const amount = 122000;
    const action = {
        type:'EDIT_EXPENSE',
        id: '-1',
        updates:{
            amount
        }
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type:'SET_EXPENSES',
        expenses : [expenses[1]]
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([expenses[1]]);
});