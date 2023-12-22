import React from 'react';
import Step2 from '../../assets/images/stipulationStep2.png';
import NextBtnComplete from '../../components/NextBtnComplete';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/stipuldation.module.css';
import bibi from '../../assets/images/bibi.png';
import Figure from 'react-bootstrap/Figure';

function Second() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/stip', { state: { idx: 3 } });
  };

  return (
    <div className={`${styles.body_relative} ${styles.flex}`}>
      <div className="body-container">
        <img src={Step2} alt="step2" />
        <div className={styles.title2}>돈기브업은?</div>
        <div className={`${styles.contents_wrapper} fs-5`}>
          <div className={styles.contents}>
            <div><span className={styles.strong}>오직 하나의 분야</span>를 정해 작은 것부터</div>
            <div>시작할 수 있는 쉬운 가계부예요.</div>
          </div>
          <div className={styles.contents}>
            <div>모든 지출 분야를 기록하는</div>
            <div>기존의 가계부와 달라요.</div>
          </div>
          <div className={styles.contents}>
            <div>줄이고 싶은 지출 분야를</div>
            <div><span className={styles.strong}>내 가계부의 테마</span>로 선택해서</div>
            <div>절약을 시작해 보아요.</div>
          </div>
        </div>
        <div className={styles.img_container}>
          <Figure>
            <Figure.Image height={150} alt="171x180" src={bibi} />
          </Figure>
        </div>
      </div>
      <NextBtnComplete handleNextClick={handleNextClick}>다음</NextBtnComplete>
    </div>
  );
}

export default Second;
