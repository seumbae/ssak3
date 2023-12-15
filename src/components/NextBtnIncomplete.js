import React from 'react';
import '../styles/common.css';

function NextBtnInComplete({ children }) {
  return (
    <div className="next-btn-incomplete fs-2">
      <div>{children}</div>
    </div>
  );
}

export default NextBtnInComplete;
