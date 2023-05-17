import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/*Make Sure to install the react-router-dom npm, otherwise it will give you an error then set it up as <BrowserRouter>*/
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

