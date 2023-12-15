import React from 'react';
import '../styles/common.css';

function NextBtnComplete({ children, handleNextClick}) {
  return (
    <button className="next-btn-complete fs-2" onClick={handleNextClick}>
      <div>{children}</div>
    </button>
  );
}

export default NextBtnComplete;
