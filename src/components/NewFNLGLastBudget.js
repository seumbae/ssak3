import React, { useRef, useState } from 'react';
import newlamu from '../assets/newlamu.png';
import NextBtnComplete from './NextBtnComplete';

function NewFNLGLastBudget({ setLastBudgetShow, setBudgetShow }) {
  // 숫자를 1000단위로 콤마로 구분하는 함수
  const formatNumber = (num) => {
    return Number(num).toLocaleString();
  };

  const lastBudgetNextClick = () => {
    setLastBudgetShow(false);
    setBudgetShow(true);
  };

  return (
    <div className="NewFNLGGoalDiv">
      <div>
        <div className="NewFNLGBudgetTitle">{formatNumber(400500)}원</div>
        <div className="NewFNLGBudgetText">지난 달 패션/쇼핑에 소비하신 금액이에요</div>
        <img src={newlamu} alt="newlamu"></img>
      </div>
      <button className="next-btn-complete fs-2" onClick={lastBudgetNextClick}>
        다음
      </button>
    </div>
  );
}

export default NewFNLGLastBudget;
