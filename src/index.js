import React from 'react';
import ReactDOM from 'react-dom/client';
//redux
import { setupStore } from './redux/store';
import { Provider } from 'react-redux/es/exports';
//components
import App from './App';

const store = setupStore();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>);
//  </React.StrictMode>);
//  <React.StrictMode>