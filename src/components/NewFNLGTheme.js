import React, { useState } from 'react';
import newcoli from '../assets/newcoli.png';
import newarrow from '../assets/newarrow.png';
import NextBtnInComplete from './NextBtnIncomplete';
import NextBtnComplete from './NextBtnComplete';

function NewFNLGTheme({ setThemeShow, setLastBudgetShow }) {
  const [nextBtnShow, setNextBtnShow] = useState(false);

  const handleNextClick = () => {
    setNextBtnShow(true);
    setThemeShow(false);
    setLastBudgetShow(true);
  };

  const handleEditClick = () => {
    setNextBtnShow((prevState) => !prevState);
  };

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
        </div>

        <div className="NewFNLGThemeText">
          <div>&apos;테마&apos; 관련 항목</div>
          <div> 가계부를 작성할게요.</div>
          <img src={newcoli} alt="newcoli"></img>
        </div>
      </div>
      {nextBtnShow ? (
        <button className="next-btn-complete fs-2" onClick={handleNextClick}>
          확인
        </button>
      ) : (
        // <NextBtnInComplete onClick={handleNextClick}>확인</NextBtnInComplete>
        <button className="next-btn-incomplete fs-2" onClick={handleEditClick}>
          다음
        </button>
        // <NextBtnComplete onClick={handleEditClick}>다음</NextBtnComplete>
      )}
    </div>
  );
}

export default NewFNLGTheme;
