import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'react-bootstrap-icons';
import CancleBtn from './Cancle';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="header-wrapper">
        <div>
          <ChevronLeft className="back" size={25} onClick={goBack} />
          <span>돈기브업</span>
        </div>
        {path === 'stip' ? <CancleBtn /> : null}
      </div>
      <Outlet />
    </>
  );
}

export default Header;
