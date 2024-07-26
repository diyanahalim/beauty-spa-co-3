import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// fonts
import "./assets/fonts/LagencyfreeRegular.otf";
import "./assets/fonts/LagencyfreeRegular.woff";
import "./assets/fonts/LagencyfreeRegular.woff2";
import "./assets/fonts/Maisondeartisan.otf";
import "./assets/fonts/Maisondeartisan.woff";
import "./assets/fonts/Maisondeartisan.woff2";

import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
