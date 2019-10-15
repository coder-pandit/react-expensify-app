import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import expensesReducer from './../reducers/expenses';
import filteresReducer from './../reducers/filters';
import authReducer from './../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filteresReducer,
    auth: authReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
