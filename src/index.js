import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const logger = ({ dispatch, getState }) => (next) => (action) => {
  //logger code
  console.log('ACTION_TYPE = ', action.type);
  next(action);
};
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('state', store);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
