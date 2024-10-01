import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Toaster } from './components/ui/sonner';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Toaster/>
  </React.StrictMode>,
  document.getElementById('root')
);