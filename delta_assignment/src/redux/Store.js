import {createStore, combineReducers} from 'redux';
import { Auth_reducer, Team_reducer } from './reducer';

const rootReducer = combineReducers({
    Team_Member: Team_reducer,
    Token: Auth_reducer
})


export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   
);

// console.log(store.getState());