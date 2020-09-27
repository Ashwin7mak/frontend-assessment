import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const initialState = { view: 'SALES' }
const store = createStore(reducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

document.getElementById('root'));

