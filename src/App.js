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
}

export default App;
