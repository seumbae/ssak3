import React, { useState } from 'react';
import Step3 from '../../assets/images/stipulationStep3.png';
import NextBtnComplete from '../../components/NextBtnComplete';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/stipuldation.module.css';

function Third() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/stip', { state: { idx: 4 } });
  };

  return (
    <div className={`${styles.body_relative} ${styles.flex}`}>
      <div className="body-container">
        <img src={Step3} alt="step1" />
        <div className="fs-1 fw-bold mt-5 mb-3">테마란?</div>
        <div className={`${styles.contents_wrapper} fs-5`}>
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
      <div className={styles.records_wrapper}>
        <div className="record-container">
          <div className="record-info-area">
            <div className="record-info">14:53 | 맥도날드</div>
            <div className="record-cat">점심</div>
          </div>

          <div className="record-title-area">
            <div className="record-title">
              <span className="record-title-name">맥도날드</span>
              <i className="bi bi-receipt"></i>
            </div>
            <div className="record-price">-14,300원</div>
          </div>
          <div className="line"></div>
        </div>
        <div className="record-container">
          <div className="record-info-area">
            <div className={`record-info ${styles.inactive_text}`}>16:27 | IFC몰</div>
            <div className={`record-cat ${styles.inactive_bg}`}>쇼핑</div>
          </div>
          <div>
            <div className="record-title-area">
              <div className={`${styles.inactive_text} record-title`}>자라</div>
              <div className={`${styles.inactive_text} record-price`}>-110,200원</div>
            </div>
            <div className="line"></div>
          </div>
        </div>
        <div className="record-container">
          <div className="record-info-area">
            <div className="record-info">19:33 | 타코야끼</div>
            <div className="record-cat">간식</div>
          </div>

          <div className="record-title-area">
            <div className="record-title">타코야끼 전문점</div>
            <div className="record-price">-11,000원</div>
          </div>
          <div className="line"></div>
        </div>
      </div>
      <NextBtnComplete handleNextClick={handleNextClick}>다음</NextBtnComplete>
    </div>
  );
}

export default Third;
