import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Step1 from '../../assets/images/stipulationStep1.png';

function Stipulation(props) {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.state.idx === 1) {
    return (
      <div>
        <img src={Step1} alt="step1" />
        <div>돈기브업서비스 가입을 시작합니다</div>
        <div>
          <div>약관 전체동의</div>
        </div>
      </div>
    );
  }
}

export default Stipulation;
