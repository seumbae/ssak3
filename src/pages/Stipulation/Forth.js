import React, { useState } from 'react';
import Step4 from '../../assets/images/stipulationStep4.png';
import NextBtnComplete from '../../components/NextBtnComplete';
import '../../styles/stipulation.css';
import { useNavigate } from 'react-router-dom';
import mainImg2 from '../../assets/images/main2.png';

function Forth() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/stip', { state: { idx: 4 } });
  };

  return (
    <div className="body-relative flex">
      <div className="body-container">
        <img className="" src={Step4} alt="step4" />
        <div className="fs-1 fw-bold mt-5 mb-3">시작해볼까요?</div>
        <div className="fs-5 contents-wrapper2">
          <div>
            <div>가계부를 만들고 지출을 줄여 보아요!</div>
          </div>
          <img src={mainImg2} alt="mainImg2" />
        </div>
      </div>
        <NextBtnComplete handleNextClick={handleNextClick}>가계부 만들기</NextBtnComplete>
    </div>
  );
}

export default Forth;
