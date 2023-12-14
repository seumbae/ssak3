<<<<<<< HEAD
import logo from './logo.svg';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="fontTest">폰트를 테스트 해볼거얌</p>
        <p className="fontTest2">폰트를 테스트 해볼거얌</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React ssak3333
        </a>
      </header>
    </div>
  );
=======
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Test from './pages/TestPage';

function App() {
  return (
    /**
     * path="/" 아래에 작성하세용
     * 
     * 아래와 같이 자신이 만든 페이지 연결하시면 됩니다
		 * <Route path="/login" element={<LoginPage />}></Route>
     * <Route path="" element={<Navigate to="/login" />} />
     */
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Test />} />
      </Route>
    </Routes>
  )
>>>>>>> daf96803a0ece4ecbf329af0613689a297b1c589
}

export default App;
