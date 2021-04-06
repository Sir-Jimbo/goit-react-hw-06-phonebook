import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
//import { saveContact, deleteContact } from 'redux/actions';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
