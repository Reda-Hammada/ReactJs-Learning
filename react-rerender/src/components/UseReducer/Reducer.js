
const initialState = 'loading';

const reducer =  (state,action) => {
     
    switch(action){

        case'success': return state = 'success';
        case'loading': return state = 'loading';
        case 'error':  return state = 'error';
        case 'reset': return initialState;
        default: return state;
    }
}

export const Reducer = {
    reducer,
    initialState
}