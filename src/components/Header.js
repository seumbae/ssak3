import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'react-bootstrap-icons';
import CancleBtn from './Cancle';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const [headerName, setHeaderName] = React.useState('돈기브업');

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    switch(path){
      case 'chart':
        setHeaderName('통계');
        break;
      case 'yours':
        setHeaderName('너의 가계부');
        break;
      case 'payment':
        setHeaderName('결제내역');
        break;
      case 'badge':
        setHeaderName('활동 배지');
        break;
      case 'savings':
        setHeaderName('적금');
        break;
      case 'friend':
        setHeaderName('친구');
        break;
      default:
        setHeaderName('돈기브업');
        break;
    }
  },[path])


  return (
    <>
      <div className="header-wrapper">
        <div>
          <ChevronLeft className="back" size={25} onClick={goBack} />
          <span>{headerName}</span>
        </div>
        {path === 'stip' ? <CancleBtn /> : null}
      </div>
      <Outlet />
    </>
  );
}

export default Header;
