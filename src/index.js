import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Namu from './namu/namu.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    {/* <App /> */}
    <Namu />
  </React.StrictMode>
=======
    <App />
  </React.StrictMode>,
>>>>>>> a833cee59afe85a972763bbf29ae589712e224dd
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
