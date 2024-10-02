import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Toaster } from './components/ui/sonner';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster/>
  </React.StrictMode>,
);