import uuid from 'uuid';
import database from '../firebase/firebase';

//Add Expense
// export const addExpense = ({    //Without Database
//     description = '', 
//     note = '', 
//     amount = 0, 
//     createdAt = 0} = {}
// ) =>({
//     type : 'ADD_EXPENSE',
//     expense : {
//         id : uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// });
export const addExpense = (expense) =>({  //With Database
    type : 'ADD_EXPENSE',
    expense
});

export const startAddExpense = ( expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = {description, note, amount, createdAt};

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

//Remove Expense
export const removeExpense = ({id} = {}) => ({
    type : 'REMOVE_EXPENSE',
    id 
});

export const startRemoveExpense = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({
                id
            }));
         });
    };
};

//Edit Expense
export const editExpense = (id, updates) =>({
    type : 'EDIT_EXPENSE',
    id,
    updates
});

//SET_EXPENSE
export const setExpenses = (expenses) =>({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot)=>{
            const expenses = [];

            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setExpenses(expenses));
        });
    };
};