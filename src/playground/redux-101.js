import {createStore} from 'redux';

const incrementCount = ({incerementBy = 1} = {}) =>({
    type : 'INCREMENT',
    incerementBy
});
const decrementCount = ({decerementBy = 1} = {}) =>({
    type : 'DECREMENT',
    decerementBy
});
const setCount = ({count}) =>({
    type : 'SET',
    count
});
const resetCount = () =>({
    type : 'RESET'
});

const countReducer =((state = { count : 0 }, action)=>{
    switch (action.type){
        case  'INCREMENT' :
            //const incerement = typeof action.incerementBy === 'number' ? action.incerementBy : 1;
            return{
                count : state.count + action.incerementBy
            };
            case  'DECREMENT' :
            //const decerement = typeof action.decerementBy === 'number' ? action.decerementBy : 1;
            return{
                count : state.count - action.decerementBy
            };
            case  'SET' :
            return{
                count : action.count
            };
            case  'RESET' :
            return{
                count : 0
            };    
        default:    
            return state;
    }
});

const store = createStore(countReducer);

const unsubscribe = store.subscribe( () => {
    console.log(store.getState());
})

store.dispatch(incrementCount({incerementBy : 5}));
// store.dispatch(
//     {
//         type: 'INCREMENT',
//         incerementBy : 5
//     }
// );

store.dispatch(incrementCount());
// store.dispatch(
//     {
//         type: 'INCREMENT'
//     }
// );

// unsubscribe();

store.dispatch(resetCount());
// store.dispatch(
//     {
//         type: 'RESET'
//     }
// );

store.dispatch(decrementCount());
// store.dispatch(
//     {
//         type: 'DECREMENT',
//     }
// );
store.dispatch(decrementCount({decerementBy : 10}));
// store.dispatch(
//     {
//         type: 'DECREMENT',
//         decerementBy: 10
//     }
// );
store.dispatch(setCount({count : 101}));
// store.dispatch(
//     {
//         type: 'SET',
//         count: 101
//     }
// );

