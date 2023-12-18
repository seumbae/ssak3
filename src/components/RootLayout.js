import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/common.css';

export function RootLayout() {
  return (
    <div className="root-layout">
        <Outlet />
    </div>
  );
}

export function Root() {
    return (
        <div className="root-layout">
            <Outlet />
        </div>
    )
}
