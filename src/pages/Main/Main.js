import React from 'react';
import '../../styles/main.css';
import mainImage from '../../assets/images/main.png';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../services/service';

function Main() {
  const navigate = useNavigate();
  const handleStartClick = (e) => {
    e.preventDefault();

    // getUsers({userId : 1}).then((res) => {
    //   console.log(res);
    // }); 
    if (localStorage.getItem('userId') === null) {
      navigate('/stip', {state : {idx : 1}});
    }
    // 메인 페이지로 이동
    // navigate('/home');
  };

  return (
    <div className="container">
      <div className="title-container">
        <div>
          <div className="sub-title">돈기부여 되는 가계부</div>
          <div className="title">KB 돈기브업</div>
        </div>
        <div className="sub-title">Don&apos;t give up</div>
      </div>
      <div>
        <img src={mainImage} alt="main" />
      </div>
      <button className="main-btn" onClick={handleStartClick}>
        시작하기
      </button>
    </div>
  );
}

export default Main;
