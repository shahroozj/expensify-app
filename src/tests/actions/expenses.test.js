import configurMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startAddExpense, 
    addExpense, 
    editExpense, 
    startEditExpense, 
    removeExpense, 
    startRemoveExpense,
    setExpenses, 
    startSetExpenses} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = "thisismytestuid";
const defaultAuthState = { auth : {uid} };
const createMockStore = configurMockStore([thunk]);

beforeEach((done)=>{
    const expensesData = {};
    expenses.forEach(({id, description, amount, note, createdAt})=>{
        expensesData[id] = {description, amount, note, createdAt}; 
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(()=> done());
});

test('should setup remove expense action object', () => {
    const action = removeExpense({id : '123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should remove expense from database', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({id})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE",
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
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

test('should edit expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    const updates= { amount: 3000 };

    store.dispatch(startEditExpense(id, updates)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "EDIT_EXPENSE",
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
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
    const store = createMockStore(defaultAuthState);
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

        return database.ref(`users/${uid}/expenses/${action[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to databaseand store', (done)=>{
    const store = createMockStore(defaultAuthState);
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

        return database.ref(`users/${uid}/expenses/${action[0].expense.id}`).once('value');
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

test('should setup set expense action object with data', ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type : 'SET_EXPENSES',
        expenses
    })
});

test('should fetch the expenses from database', (done)=>{
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type : 'SET_EXPENSES', 
            expenses
        });
        done();
    });
});