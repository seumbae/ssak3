import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'react-bootstrap-icons';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="header">
        <div>
          <ChevronLeft className="back" size={25} onClick={goBack} />
          <span>돈기브업</span>
        </div>
        {path === 'stip' ? <div>취소</div> : null}
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
