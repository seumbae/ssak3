import React from 'react';
import Step2 from '../../assets/images/stipulationStep2.png';
import NextBtnComplete from '../../components/NextBtnComplete';
import '../../styles/stipulation.css';
import { useNavigate } from 'react-router-dom';

function Second() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/stip', { state: { idx: 3 } });
  };

  return (
    <div className="body-relative flex">
      <div className="body-container">
        <img src={Step2} alt="step2" />
        <div className="fs-1 fw-bold mt-5 mb-3">돈기브업은?</div>
        <div className="fs-5 contents-wrapper">
          <div>
            <div>오직 하나의 분야를 정해</div>
            <div>작은 것부터 시작할 수 있는</div>
            <div>쉬운 가계부에요.</div>
          </div>
          <div>
            <div>모든 지출 분야를 기록하는</div>
            <div>기존의 가계부와 달라요.</div>
          </div>
          <div>
            <div>줄이고 싶은 지출 분야를</div>
            <div>내 가계부의 테마로 선택해서</div>
            <div>절약을 시작해 보아요.</div>
          </div>
        </div>
      </div>
      <NextBtnComplete handleNextClick={handleNextClick}>다음</NextBtnComplete>
    </div>
  );
}

export default Second;
