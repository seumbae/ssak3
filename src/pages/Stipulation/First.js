import React, { useState } from 'react';
import Step1 from '../../assets/images/stipulationStep1.png';
import NextBtnComplete from '../../components/NextBtnComplete';
import UnCheckedBtn from '../../assets/images/ucButton.png';
import CheckedBtn from '../../assets/images/cButton.png';
import HorizonLine from '../../components/HorizonLine';
import NextBtnInComplete from '../../components/NextBtnIncomplete';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/stipuldation.module.css';

function First() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState({
    button1: false,
    button2: false,
    button3: false,
  });

  const handleAllChecked = () => {
    if (isAllChecked()) {
      setChecked({
        button1: false,
        button2: false,
        button3: false,
      });
    } else {
      setChecked({
        button1: true,
        button2: true,
        button3: true,
      });
    }
  };

  const handleSubChecked = (name) => {
    setChecked((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const isAllChecked = () => {
    return Object.values(checked).every((val) => val === true);
  };

  const handleNextClick = () => {
    navigate('/stip', { state: { idx: 2 } });
  };

  return (
    <div className={`${styles.body_relative} ${styles.flex}`}>
      <div className="body-container">
        <img src={Step1} alt="step1" />
        <div className="fs-4 fw-bold mt-5">돈기브업서비스 가입을 시작합니다</div>
        <div>
          <div className={styles.btn_wrapper}>
            <button className={styles.img_wrapper} onClick={handleAllChecked}>
              <img src={isAllChecked() ? CheckedBtn : UnCheckedBtn} alt="button" width={28} />
            </button>
            <div className="fs-4 fw-bold">약관 전체동의</div>
          </div>
          <HorizonLine />
          {/* 가로줄 */}
          <div className={styles.btn_wrapper}>
            <button className={styles.img_wrapper} onClick={() => handleSubChecked('button1')}>
              <img src={checked['button1'] ? CheckedBtn : UnCheckedBtn} alt="button1" width={28} />
            </button>
            <div className="fs-5">돈기브업서비스 이용약관[필수]</div>
          </div>
          <div className={styles.btn_wrapper}>
            <button className={styles.img_wrapper} onClick={() => handleSubChecked('button2')}>
              <img src={checked['button2'] ? CheckedBtn : UnCheckedBtn} alt="button2" width={28} />
            </button>
            <div className="fs-5">마이데이터 관련 사용 동의서[필수]</div>
          </div>
          <div className={styles.btn_wrapper}>
            <button className={styles.img_wrapper} onClick={() => handleSubChecked('button3')}>
              <img src={checked['button3'] ? CheckedBtn : UnCheckedBtn} alt="button3" width={28} />
            </button>
            <div className="fs-5">돈기브업서비스 설명서[필수]</div>
          </div>
        </div>
      </div>
      {isAllChecked() ? (
        <NextBtnComplete handleNextClick={handleNextClick}>다음</NextBtnComplete>
      ) : (
        <NextBtnInComplete>다음</NextBtnInComplete>
      )}
    </div>
  );
}

export default First;
