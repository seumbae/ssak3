import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styles from '../styles/loading.module.css';

function Loading() {
  return (
    <div className={styles.wrapper}>
      <Spinner animation="border" />
    </div>
  );
}

export default Loading;
