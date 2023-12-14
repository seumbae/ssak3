import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Test from './pages/TestPage';
import Home from './pages/Home';
import NewFNLG from './pages/NewFNLG';
import ChartPage from './pages/ChartPage';
import PaymentPage from './pages/PaymentPage';
import YourFNLG from './pages/YourFNLG';
import BadgePage from './pages/BadgePage';
import SavingsPage from './pages/SavingsPage';
import FriendPage from './pages/FriendPage';
import './App.css';

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
        <Route path="/home" element={<Home />} />
        <Route path="/new" element={<NewFNLG />} />
        <Route path="/chart" element={<ChartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/yours" element={<YourFNLG />} />
        <Route path="/badge" element={<BadgePage />} />
        <Route path="/savings" element={<SavingsPage />} />
        <Route path="/friend" element={<FriendPage />} />
      </Route>
    </Routes>
  );
}

export default App;
