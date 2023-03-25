import { combineReducers, createStore } from 'redux';
import serviceAddReducer from './serviceAdd';
import serviceListReducer from './serviceList';
import serviceFilterReducer from './serviceFilter';

const reducer = combineReducers({
   serviceList: serviceListReducer,
   serviceAdd: serviceAddReducer,
   serviceFilter: serviceFilterReducer,
});

const store = createStore(reducer);

export default store;