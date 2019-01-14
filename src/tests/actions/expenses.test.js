import configurMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configurMockStore([thunk]);

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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[2]
    });
});

test('should add expense to databaseand store', (done)=>{
    const store = createMockStore({});
    const expenseData= {
        description: 'Mouse',
        amount: 3000,
        note:'office works',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${action[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to databaseand store', (done)=>{
    const store = createMockStore({});
    const expenseDataDefault= {
        description: '',
        amount: 0,
        note:'',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(()=>{
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseDataDefault
            }
        })

        return database.ref(`expenses/${action[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseDataDefault);
        done();
    });
});

// test('should setup add expense action object with default values', ()=>{
//     const action = addExpense();
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense:{
//             description:'',
//             amount: 0,
//             createdAt: 0,
//             note: '',
//             id:expect.any(String)
//         }
//     });
// });