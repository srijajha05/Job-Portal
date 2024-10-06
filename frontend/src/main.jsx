import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Toaster } from './components/ui/sonner.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store={store}>
      <App/>
      </Provider>
    <Toaster/>
  </React.StrictMode>,
);