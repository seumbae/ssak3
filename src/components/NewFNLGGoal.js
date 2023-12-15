import React, { useRef, useState } from 'react';
import newlamu from '../assets/newlamu.png';

function NewFNLGGoal() {
  const goalInput = useRef();
  const [value, onChange] = useState(new Date());

  return (
    <div className="NewFNLGGoalDiv">
      <div>
        <div className="NewFNLGGoalTitle">목표를 입력해주세요!</div>
        <div className="NewFNLGGoalText">해당 목표는 가계부의 제목으로 설정됩니다</div>
        <input className="customGoalInput" name="goalInput" ref={goalInput} placeholder="ex) 삿포로 노천탕"></input>
        <img src={newlamu} alt="newlamu"></img>
      </div>
    </div>
  );
}

export default NewFNLGGoal;
