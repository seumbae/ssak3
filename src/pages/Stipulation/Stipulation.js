import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Step1 from '../../assets/images/stipulationStep1.png';
import NextBtnComplete from '../../components/NextBtnComplete';
import '../../styles/stipulation.css';

function Stipulation(props) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  if (location.state.idx === 1) {
    return (
      <div className="body-relative flex">
        <div className="body-container">
          <img src={Step1} alt="step1" />
          <div className='fs-4 fw-bold mt-5' >돈기브업서비스 가입을 시작합니다</div>
          <div>
            <div>
              <div>약관 전체동의</div>
            </div>
            {/* 가로줄 */}
            <div>
              {/* button */}
              <div>돈기브업서비스 이용약관[필수]</div>
            </div>
            <div>
              {/* button */}
              <div>마이데이터 관련 사용 동의서[필수]</div>
            </div>
            <div>
              {/* button */}
              <div>돈기브업서비스 설명서[필수]</div>
            </div>
            <div>
              {/* button */}
              <div>돈기브업서비스 설명서[필수]</div>
            </div>
          </div>
        </div>
        <div>
          {/* 다음 버튼 */}
          <NextBtnComplete>다음</NextBtnComplete>
        </div>
      </div>
    );
  }
}

export default Stipulation;
