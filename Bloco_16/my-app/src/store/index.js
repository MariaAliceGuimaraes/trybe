import { createStore, combineReducers } from 'redux';
import formReducer from '../reducer'

const rootReducer = combineReducers({ formReducer });
const store = createStore(rootReducer);

export default store;
