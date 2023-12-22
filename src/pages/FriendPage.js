import React from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from '../styles/friend.module.css';
import { useNavigate } from 'react-router-dom';

function FriendPage() {
  const navigate = useNavigate();

  const handleNextClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <Modal show={true} animation={false} centered>
        <div className={styles.modal_wrapper}>
          <div className={styles.title}>페이지 준비중입니다.</div>
          <div className={'mb-2'} style={{ color: 'red' }}>
            응답코드(DG001)
          </div>
          {/* <br></br> */}
          <div>· 이용에 불편을 드려 죄송합니다.</div>
          <div>· 보다 나은 서비스를 빠른 시일내에 준비하여 찾아뵙겠습니다.</div>
        </div>
        <button className={styles.btn} onClick={handleNextClick}>
          확인
        </button>
      </Modal>
    </>
  );
}

export default FriendPage;
