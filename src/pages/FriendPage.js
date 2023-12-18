import React from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from '../styles/friend.module.css';
import { useNavigate } from 'react-router-dom';

function FriendPage() {
  const navigate = useNavigate();

  const handleNextClick = (e) => {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <>
      <Modal show={true} animation={false} centered>
        <div className={styles.modal_wrapper}>
          <div className={styles.title}>고객님 죄송합니다.</div>
          <div>· 통신 중 일시적인 오류가 발생했습니다.</div>
          <div>· 이용하시던 업무의 처리결과를 반드시 확인하신 후 다시 이용해주시기 바랍니다.</div>
        </div>
        <button className={styles.btn} onClick={handleNextClick}>확인</button>
      </Modal>
    </>
  );
}

export default FriendPage;
