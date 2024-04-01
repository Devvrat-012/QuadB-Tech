import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; // Import for routing (optional)
import App from './App';
import store from './store.js'; // Import your Redux store

const root = createRoot(document.getElementById('root')); // Create a root element

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter> {/* Wrap your app with BrowserRouter if using routing */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
