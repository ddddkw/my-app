import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import alova from './app/request/alova'
import App from './App';
import reportWebVitals from './reportWebVitals';

// 全局封装alova
React.$alova = alova

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
