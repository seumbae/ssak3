import React from 'react';
import tree from '../assets/images/tree.png';
import '../styles/badge.css';
function BadgePage() {
  return (
    <>
      <div className="badge-container">
        <img className="treeImg mt-3" src={tree} alt="tree" />
      </div>
      <div className="badge-save-container">
        <h2>배지 보관함</h2>
        <h4>획득한 배지를 클릭하여 트리를 꾸며보세요!</h4>
      </div>
    </>
  );
}

export default BadgePage;
