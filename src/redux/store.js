import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import userRed from './userReducer';

const rootReducer = combineReducers({
    userList: userRed
})

const initialState = {};

const middleware = [thunk]


const Store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
); 

export default Store;





























