import React from 'react';
import Step3 from '../../assets/images/stipulationStep3.png';
import NextBtnComplete from '../../components/NextBtnComplete';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/stipuldation.module.css';

function Third() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/stip', { state: { idx: 4 } });
  };

  const records = [
    { time: '14:53', name: '홈플러스', cat: '술', title: '홈플에서 술삼', price: '30000' },
    { time: '16:53', name: '라공방', cat: '식사', title: '마라탕 먹음', price: '10000' },
    { time: '20:53', name: '다이소', cat: '장갑', title: '추워서 장갑삼', price: '2000' },
  ];

  const catClasses = [`${styles.cat1}`, `${styles.cat2}`, `${styles.cat3}`];

  return (
    <div className={`${styles.body_relative} ${styles.flex}`}>
      <div className="body-container">
        <img src={Step3} alt="step1" />
        <div className={styles.title2}>테마란?</div>
        <div className={`${styles.contents_wrapper} fs-5`}>
          <div className={styles.contents}>
            <div>기록하고 싶은 지출 분야를 말해요.</div>
          </div>
          <div className={styles.contents}>
            <div>선택한 분야의 내역만 가계부에</div>
            <div>보여드릴게요.</div>
          </div>
          <div className={styles.contents}>
            <div>식비 테마를 선택했다면</div>
            <div>식비 지출만 관리할 수 있도록 도와줄게요.</div>
          </div>
        </div>
      <div className={styles.records_wrapper}>
        {records.map((r, i) => (
          <div className={styles.record_container} key={i}>
            <div className={styles.record_info_area}>
              <div className={i === 1 ? styles.record_info_inactive : styles.record_info}>
                {r.time} | {r.name}
              </div>
              <div className={`${styles.record_cat} ${catClasses[i]}`}>{r.cat}</div>
            </div>

            <div className={styles.record_title_area}>
              <div className={i === 1 ? styles.record_title_inactive : styles.record_title}>
                <span className={styles.record_title_name}>{r.title}</span>
                <i className="bi bi-receipt"></i>
              </div>
              <div className={i === 1 ? styles.record_price_inactive : styles.record_price}>-{r.price}원</div>
            </div>
          </div>
        ))}
      </div>
      </div>

      <NextBtnComplete handleNextClick={handleNextClick}>다음</NextBtnComplete>
    </div>
  );
}

export default Third;