import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './components/Home';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Provider store={store}>
      <App/>
    </Provider>
  </div>
);
