import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom"
import { Provider } from "./Provider"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
