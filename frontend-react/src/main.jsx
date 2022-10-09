import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BlogProvider } from './context/BlogContex';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlogProvider>
      <App />
    </BlogProvider>
  </React.StrictMode>
);
