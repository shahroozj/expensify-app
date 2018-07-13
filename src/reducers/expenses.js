//Expense Reducer
const expensesReducerDefaultState = [];

//const expensesReducer = (state = expensesReducerDefaultState, action) => {
export default (state = expensesReducerDefaultState, action) => {
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

//export default expensesReducer