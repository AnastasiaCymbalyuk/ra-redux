import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './reduce/store';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
     <Provider store={store}>
        <App />
     </Provider>
  </React.StrictMode>
);

