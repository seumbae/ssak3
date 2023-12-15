import React, { useState } from 'react';
import newcoli from '../assets/newcoli.png';
import newarrow from '../assets/newarrow.png';

function NewFNLGTheme() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="NewFNLGThemeDiv">
      <div>
        <div className="NewFNLGThemeTitle">
          <div>테마를</div>
          <div>선택해주세요!</div>
        </div>
        <div className="NewFNLGThemeSelect">
          <div></div>
          <div>전체</div>
          <img src={newarrow} alt="newarrow"></img>
        </div>

        <div className="NewFNLGThemeText">
          <div>&apos;테마&apos; 관련 항목</div>
          <div> 가계부를 작성할게요.</div>
          <img src={newcoli} alt="newcoli"></img>
        </div>
      </div>
    </div>
  );
}

export default NewFNLGTheme;
