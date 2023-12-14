import './App.css';
import React from 'react';
import ReactCalendar from './components/Calendar.js';
function App() {
  return (
    <div className="container">
      <header className="App-header">
        <ReactCalendar />
      </header>
    </div>
  );
}

export default App;
