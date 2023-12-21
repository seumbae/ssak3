import React, { useRef, useState } from 'react';
import newlamu from '../assets/newlamu.png';

function NewFNLGBudget({ monthExpense, setBudgetShow, setGoalShow, setMonthBudget, selectedTheme }) {
  const budgetInput = useRef(350000);
  const [budgetInputShow, setBudgetInputShow] = useState(false);
  const [currentBudget, setCurrentBudget] = useState(budgetInput.current);

  const handleEditClick = () => {
    setBudgetInputShow((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    // 숫자만 추출
    const numbersOnly = e.target.value.replace(/[^0-9]/g, '');
    // 숫자 포맷팅 및 상태 업데이트
    setCurrentBudget(numbersOnly);
  };

  const handleCompleteClick = () => {
    budgetInput.current.value = currentBudget; // 현재 입력된 값을 ref에 반영
    setBudgetInputShow(false);
  };

  // 숫자를 1000단위로 콤마로 구분하는 함수
  const formatNumber = (num) => {
    return Number(num).toLocaleString();
  };
  const budgetNextClick = () => {
    setMonthBudget(currentBudget);
    if (budgetInputShow) {
      setBudgetInputShow(false);
    }
    setBudgetShow(false);
    setGoalShow(true);
  };
  return (
    <div className="NewFNLGGoalDiv">
      <div>
        <div className="NewFNLGBudgetTop">
          <div className="NewFNLGBudgetTitle">{formatNumber(currentBudget)}원</div>
          <button className="EditButton" onClick={handleEditClick}>
            수정
          </button>
        </div>
        {budgetInputShow && (
          <div className="EditBox">
            <input
              className="customBudgetInput"
              name="budgetInput"
              ref={budgetInput}
              value={formatNumber(currentBudget)}
              onChange={handleInputChange}
              maxLength={8}
            ></input>
            <button className="EditButton" onClick={handleCompleteClick}>
              완료
            </button>
          </div>
        )}
        <div className="NewFNLGBudgetText">
          <div>저희가 추천하는 {selectedTheme.themeName} 예산이에요</div>
          {currentBudget >= monthExpense ? (
            <div>지난 달보다 {formatNumber(currentBudget - monthExpense)}원을 더 사용하게 됩니다.</div>
          ) : (
            <div>지난 달보다 {formatNumber(monthExpense - currentBudget)}원을 아낄 수 있어요</div>
          )}
        </div>
      </div>
      <img src={newlamu} alt="newlamu" width="217" height="245"></img>
      <button className="next-btn-complete fs-2" onClick={budgetNextClick}>
        다음
      </button>
    </div>
  );
}

export default NewFNLGBudget;
