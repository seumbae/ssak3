import React, { useRef, useState } from 'react';
import newlamu from '../assets/newlamu.png';

function NewFNLGGoal({ setGoalShow, setThemeShow }) {
  const goalInput = useRef();
  const [goalNextBtnShow, setGoalNextBtnShow] = useState(false);

  const handleInputChange = () => {
    if (goalInput.current && goalInput.current.value) {
      setGoalNextBtnShow(true); // 입력이 있으면 true
    } else {
      setGoalNextBtnShow(false); // 입력이 없으면 false
    }
  };

  const goalNextClick = () => {
    setGoalShow(false);
  };

  return (
    <div className="NewFNLGGoalDiv">
      <div>
        <div className="NewFNLGGoalTitle">목표를 입력해주세요!</div>
        <div className="NewFNLGGoalText">해당 목표는 가계부의 제목으로 설정됩니다</div>
        <input
          className="customGoalInput"
          name="goalInput"
          ref={goalInput}
          placeholder="ex) 삿포로 노천탕"
          onChange={handleInputChange} // 입력 변경 이벤트
        ></input>
        {/* <input className="customGoalInput" name="goalInput" ref={goalInput} placeholder="ex) 삿포로 노천탕"></input> */}
        <img src={newlamu} alt="newlamu"></img>
      </div>
      {!goalNextBtnShow && (
        <button className="next-btn-incomplete fs-2" onClick={goalNextClick}>
          다음
        </button>
      )}
      {goalNextBtnShow && (
        <button className="next-btn-complete fs-2" onClick={goalNextClick}>
          다음
        </button>
      )}
    </div>
  );
}

export default NewFNLGGoal;
