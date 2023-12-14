import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/common.css';

function Root() {
  return (
    <div className="root-layout">
      <Outlet />
    </div>
  );
}

export default Root;
