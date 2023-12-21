import React, { useEffect, useState } from 'react';
import newlamu from '../assets/newlamu.png';
import { getPreMonthExpense } from '../services/service';
import moment from 'moment';

function NewFNLGLastBudget({ setLastBudgetShow, setBudgetShow, setMonthExpense, selectedTheme, monthExpense }) {
  // 숫자를 1000단위로 콤마로 구분하는 함수
  const formatNumber = (num) => {
    return Number(num).toLocaleString();
  };

  const lastBudgetNextClick = () => {
    setMonthExpense(400500);
    setLastBudgetShow(false);
    setBudgetShow(true);
  };

  useEffect(() => {
    const today = new Date();
    
    getPreMonthExpense({ themeId: selectedTheme.themeId, yearMonth: today.getFullYear() + '-' + (today.getMonth()) }).then((res) => {
      setMonthExpense(res.data.monthExpense);
    });
  }, selectedTheme);
  return (
    <div className="NewFNLGGoalDiv">
      <div>
        <div className="NewFNLGBudgetTitle">{formatNumber(monthExpense)}원</div>
        <div className="NewFNLGBudgetText">지난 달 패션/쇼핑에 소비하신 금액이에요</div>
      </div>
      <img src={newlamu} alt="newlamu"></img>
      <button className="next-btn-complete fs-2" onClick={lastBudgetNextClick}>
        다음
      </button>
    </div>
  );
}

export default NewFNLGLastBudget;
