import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RootLayout, Root } from './components/RootLayout';
import Home from './pages/Home';
import NewFNLG from './pages/NewFNLG';
import ChartPage from './pages/ChartPage';
import PaymentPage from './pages/PaymentPage';
import YourFNLG from './pages/YourFNLG';
import BadgePage from './pages/BadgePage';
import SavingsPage from './pages/SavingsPage';
import FriendPage from './pages/FriendPage';
import Main from './pages/Main/Main';
import './App.css';
import Header from './components/Header';
import Stipulation from './pages/Stipulation/Stipulation';

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
      <Route element={<Root />}>
        <Route path="/" element={<Main />} />
        <Route element={<RootLayout />}>
          <Route element={<Header />}>
            <Route path='/stip' element={<Stipulation />} />
            <Route path="/home" element={<Home />} />
            <Route path="/new" element={<NewFNLG />} />
            <Route path="/chart" element={<ChartPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/yours" element={<YourFNLG />} />
            <Route path="/badge" element={<BadgePage />} />
            <Route path="/savings" element={<SavingsPage />} />
            <Route path="/friend" element={<FriendPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
