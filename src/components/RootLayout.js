import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/common.css';
import Header from './Header';

function Root() {
  return (
    <div className="root-layout">
      <Header>돈기브업</Header>
      <div className="root-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
