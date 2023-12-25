import React, { useEffect } from 'react';
import saving from '../assets/images/productPage.png';
import styles from '../styles/saving.module.css';

function SavingsPage() {
  return (
    <div className="body-container">
      <div className={styles.wrapper}>
        <div className={styles.h1}>상품 안내</div>
        <div className={styles.h2}>나에게 맞는 상품을 더 알아보아요</div>
      </div>
      <img style={{ width: '100%' }} src={saving} alt="chart" />
    </div>
  );
}

export default SavingsPage;
