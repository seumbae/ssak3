import React, { useRef, useState } from 'react';
import newlamu from '../assets/newlamu.png';

function NewFNLGBudget() {
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

  return (
    <div>
      <div>
        <div className="NewFNLGBudgetTitle">{formatNumber(400500)}원</div>
        <div className="NewFNLGBudgetText">지난 달 패션/쇼핑에 소비하신 금액이에요</div>
        <img src={newlamu} alt="newlamu"></img>
      </div>

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
            ></input>
            <button className="EditButton" onClick={handleCompleteClick}>
              완료
            </button>
          </div>
        )}
        <div className="NewFNLGBudgetText">
          <div>저희가 추천하는 패션/쇼핑 예산이에요</div>
          <div>지난 달보다 {formatNumber(400500 - currentBudget)}원을 아낄 수 있어요</div>
          <img src={newlamu} alt="newlamu" width="217" height="245"></img>
        </div>
      </div>
      <div>다음버튼</div>
    </div>
  );
}

export default NewFNLGBudget;
