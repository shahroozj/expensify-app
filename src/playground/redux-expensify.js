import {createStore, combineReducers} from 'redux';

const expencesReducerDefaultState = [];

const expensesReducer = (state = expencesReducerDefaultState, action) => {
    switch (action.type){
        default : 
            return state;
        
    }
}

const filtersReducerDefaultState = {
    name:'', 
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state =  filtersReducerDefaultState, action) => {
    switch(action.type){
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

console.log(store.getState());


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