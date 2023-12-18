import React from 'react';
import styles from "../../styles/main.module.css";
import mainImage from '../../assets/images/main.png';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  const handleStartClick = (e) => {
    e.preventDefault();

    if (localStorage.getItem('userId') === null) {
      navigate('/stip', {state : {idx : 1}});
    }

    navigate('/home');

  };

  return (
    <div className={styles.main_container}>
      <div className={styles.title_container}>
        <div>
          <div className={styles.sub_title}>돈기부여 되는 가계부</div>
          <div className={styles.title}>KB 돈기브업</div>
        </div>
        <div className={styles.sub_title}>Don&apos;t give up</div>
      </div>
      <div>
        <img src={mainImage} alt="main" />
      </div>
      <button className={styles.main_btn} onClick={handleStartClick}>
        시작하기
      </button>
    </div>
  );
}

export default Main;
