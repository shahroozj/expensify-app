import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//Add Expense
const addExpense = ({
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0} = {}
) =>({
    type : 'ADD_EXPENSE',
    expense : {
        id : uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//Remove Expense
const removeExpense = ({id} = {}) => ({
    type : 'REMOVE_EXPENSE',
    id 
});
//Edit Expense
const editExpense = (id, updates) =>({
    type : 'EDIT_EXPENSE',
    id,
    updates
});
//Set Text Filter
const setTextFilter = (text = '') => ({
    type : 'SET_TEXT_FILTER',
    text    
})
// Sort By Amount
const sortByAmount = () => ({
    type : 'SORT_BY_AMOUNT'
})
//Sort By Date
const sortByDate = () => ({
    type : 'SORT_BY_DATE'
})
//Set Start Date
const setStartDate = (startDate) => ({
    type : 'SET_START_DATE',
    startDate
})
//Set End Date
const setEndDate = (endDate) => ({
    type : 'SET_END_DATE',
    endDate
})

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE' : {
            //return state.concat(action.expense);
            return [
                ...state,  // Keep Previous Array and add next elemet at the end (Spread Operator)
                action.expense
            ]
        }
        case 'REMOVE_EXPENSE' : {
            return state.filter(({id}) => id !== action.id);
        }
        case 'EDIT_EXPENSE' : {
            return state.map((expense) => {
                if (expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else{
                    return expense;
                }
            })
        }
        default : 
            return state;
        
    }
}

const filtersReducerDefaultState = {
    text:'', 
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state =  filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER' : {
            return {
                ...state,
                text: action.text
            }
        }
        case 'SORT_BY_AMOUNT' : {
            return {
                ...state,
                sortBy:'amount'
            }
        }
        case 'SORT_BY_DATE' : {
            return {
                ...state,
                sortBy:'date'
            }
        }
        case 'SET_START_DATE' : {
            return{
                ...state,
                startDate: action.startDate
            }
        }
        case 'SET_END_DATE' : {
            return{
                ...state,
                endDate: action.endDate
            }
        }
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses : expensesReducer,
        filters : filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({description : 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description : 'Coffe', amount: 300}));

store.dispatch(removeExpense({id : expenseOne.expense.id}));

store.dispatch(editExpense(expenseTwo.expense.id, {amount : 500}));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));
store.dispatch(setEndDate());


const demoStore = {
    expenses:[{
        id : 'sdlfmsljdsfhsld',
        description : 'January Rent',
        note : 'This is the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters : {
        text:'rent',
        sortBy: 'amount',  //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

//Spread Object
// const user = {
//     name : 'Shahrooz',
//     age: 40
// }

// console.log({
//     ...user, 
//     location : 'Perth',
//     age : 41
// });