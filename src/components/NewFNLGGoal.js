import React, { useRef, useState } from 'react';
import newlamu from '../assets/newlamu.webp';
import { addLedger } from '../services/service';
import { useNavigate } from 'react-router-dom';

function NewFNLGGoal({ setGoalShow, selectedTheme, monthBudget, monthExpense, isPublic }) {
  const navigate = useNavigate();
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
    const data = {
      user: {
        userId: localStorage.getItem('userId'),
        kbPIN: localStorage.getItem('kbPIN'),
        userName: localStorage.getItem('userName'),
        age: localStorage.getItem('age'),
        income: localStorage.getItem('income'),
      },
      theme: selectedTheme,
      goal: goalInput.current.value,
      monthBudget: monthBudget,
      monthExpense: monthExpense,
      isPublic: isPublic,
    };

    addLedger(data)
      .then((res) => {
        navigate('/home');
      })
      .catch(() => {
        alert('서버와의 연결이 원활하지 않습니다.');
        navigate('/new');
      });
    setGoalShow(false);
  };

  return (
    <div className="NewFNLGGoalDiv">
      <div className="NewFNLGGoalTitleWrapper">
        <div className="NewFNLGGoalTitle">목표를 입력해주세요!</div>
        <div className="NewFNLGGoalText">해당 목표는 가계부의 제목으로 설정됩니다</div>
      </div>
      <div>
        <input
          className="customGoalInput"
          name="goalInput"
          ref={goalInput}
          placeholder="ex) 삿포로 노천탕"
          onChange={handleInputChange} // 입력 변경 이벤트
          autoComplete='off'
        ></input>
      </div>
      <img src={newlamu} alt="newlamu"></img>
      {!goalNextBtnShow && (
        <button className="next-btn-incomplete fs-2" disabled>
          완료
        </button>
      )}
      {goalNextBtnShow && (
        <button className="next-btn-complete fs-2" onClick={goalNextClick}>
          완료
        </button>
      )}
    </div>
  );
}

export default NewFNLGGoal;
