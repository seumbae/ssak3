import React, { useState } from 'react';
import Step3 from '../../assets/images/stipulationStep3.png';
import NextBtnComplete from '../../components/NextBtnComplete';
import '../../styles/stipulation.css';
import { useNavigate } from 'react-router-dom';

function Third() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/stip', { state: { idx: 4 } });
  };

  return (
    <div className="body-relative flex">
      <div className="body-container">
        <img src={Step3} alt="step1" />
        <div className="fs-2 fw-bold mt-5 mb-5">테마란?</div>
        <div className="fs-5 contents-wrapper">
          <div>
            <div>기록하고 싶은 지출 분야를 말해요.</div>
          </div>
          <div>
            <div>선택한 분야의 내역만 가계부에</div>
            <div>보여드릴게요.</div>
          </div>
          <div>
            <div>식비 테마를 선택했다면</div>
            <div>식비 지출만 관리할 수 있도록 도와줄게요.</div>
          </div>
        </div>
      </div>
        <NextBtnComplete handleNextClick={handleNextClick}>다음</NextBtnComplete>
    </div>
  );
}

export default Third;
