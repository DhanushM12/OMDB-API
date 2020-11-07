import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const logger = ({ dispatch, getState }) => (next) => (action) => {
  //logger code
  if (typeof action !== 'function') {
    console.log('ACTION_TYPE = ', action.type);
  }

  next(action);
};
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log('state', store);

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);
