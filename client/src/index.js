import 'assets/styles/index.css';
import { AppContext } from 'context/context.app';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContext />
  </React.StrictMode>
);