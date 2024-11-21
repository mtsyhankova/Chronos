import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import Store from './store/store';
import App from './App';

const { BrowserRouter } = require('react-router-dom');

const store = new Store()

export const Context = createContext({
  store
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    store
  }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);

