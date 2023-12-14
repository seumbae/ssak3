import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'react-bootstrap-icons';

function Header({ children }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="header">
      <ChevronLeft className="back" size={25} onClick={goBack} />
      {children}
    </div>
  );
}

export default Header;
