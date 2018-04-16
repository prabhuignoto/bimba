import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  RootReducer,
  {
    engine: 'google',
    settingsOpen: false,
    thumbnailSize: '1x',
    results: []
  },
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
  compose(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
