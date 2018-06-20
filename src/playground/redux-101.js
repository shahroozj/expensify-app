import {createStore} from 'redux';

const store = createStore((state = { count : 0 }, action)=>{
    switch (action.type){
        case  'INCREMENT' :
            const incerement = typeof action.incerementBy === 'number' ? action.incerementBy : 1;
            return{
                count : state.count + incerement
            };
            case  'DECREMENT' :
            const decerement = typeof action.decerementBy === 'number' ? action.decerementBy : 1;
            return{
                count : state.count - decerement,
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

const unsubscribe = store.subscribe( () => {
    console.log(store.getState());
})

store.dispatch(
    {
        type: 'INCREMENT',
        incerementBy : 5
    }
);

store.dispatch(
    {
        type: 'INCREMENT'
    }
);

// unsubscribe();

store.dispatch(
    {
        type: 'RESET'
    }
);

store.dispatch(
    {
        type: 'DECREMENT',
    }
);

store.dispatch(
    {
        type: 'DECREMENT',
        decerementBy: 10
    }
);

store.dispatch(
    {
        type: 'SET',
        count: 101
    }
);

