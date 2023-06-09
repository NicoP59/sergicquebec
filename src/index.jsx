import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Reset />
    </BrowserRouter>
  </React.StrictMode>
);
