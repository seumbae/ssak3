import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
<<<<<<< HEAD
// import App from './App';
import Namu from './namu/namu.js';
=======
import App from './App';
>>>>>>> daf96803a0ece4ecbf329af0613689a297b1c589
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <React.StrictMode>
    {/* <App /> */}
    <Namu />
  </React.StrictMode>,
=======
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
>>>>>>> daf96803a0ece4ecbf329af0613689a297b1c589
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
