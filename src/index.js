import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './Slice/store';
// import { Provider } from 'react-redux';
// import { store } from './slices/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> 
    </Provider>
  </React.StrictMode>
);
