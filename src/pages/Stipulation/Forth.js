import React, { useState } from 'react';
import Step4 from '../../assets/images/stipulationStep4.webp';
import NextBtnComplete from '../../components/NextBtnComplete';
import { useNavigate } from 'react-router-dom';
import mainImg2 from '../../assets/images/main2.webp';
import styles from '../../styles/stipuldation.module.css';
import { createUser } from '../../services/service';

function Forth() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (localStorage.getItem('userId') === null) {
        createUser(true).then((res) => {
            localStorage.setItem('userId', res.data.userId);
            localStorage.setItem('kbPIN', res.data.kbPIN);
            localStorage.setItem('userName', res.data.userName);
            localStorage.setItem('age', res.data.age);
            localStorage.setItem('income', res.data.income);
            navigate('/new');

          if (res.status === 404) {
            throw new Error('서버와의 연결이 원활하지 않습니다.');
          }
        }).catch(() => {
          alert('서버와의 연결이 원활하지 않습니다.');
          navigate('/');
        });
    }
    else {
      navigate('/new');
    }
    
  };

  return (
    <div className={`${styles.body_relative} ${styles.flex}`}>
      <div className="body-container height-inherit">
        <img src={Step4} alt="step4" />
        <div className={styles.title2}>시작해볼까요?</div>
        <div className={`${styles.contents_wrapper2} fs-5`}>
          <div className={styles.contents}>
            <div>가계부를 만들고 지출을 줄여 보아요!</div>
          </div>
          <img className={styles.img_pad} src={mainImg2} alt="mainImg2" />
        </div>
      </div>
      <NextBtnComplete handleNextClick={handleNextClick}>가계부 만들기</NextBtnComplete>
    </div>
  );
}

export default Forth;
