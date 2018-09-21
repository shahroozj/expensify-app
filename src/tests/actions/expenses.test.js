import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id : '123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {note : 'this is a note'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123abc',
        updates:{
            note : 'this is a note'
        }
    });
});

test('should setup add expense action object with provided values', ()=>{
    const expenseData = {
        description:'Rent',
        amount: 192000,
        createdAt: 1000,
        note: 'this was last month rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', ()=>{
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description:'',
            amount: 0,
            createdAt: 0,
            note: '',
            id:expect.any(String)
        }
    });
});