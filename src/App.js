import React from 'react'; 
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <p className='fontTest'>
          폰트를 테스트 해볼거얌
        </p>
        <p className='fontTest2'>
          폰트를 테스트 해볼거얌
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React ssak3333
        </a>
      </header>
    </div>
  );
}

export default App;
