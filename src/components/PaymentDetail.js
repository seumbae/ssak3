import React, { useState } from 'react';
import '../styles/record.css';
import { deleteRecordList } from '../services/service';
import CheckModal from '../components/CheckModal';
import categoryColors from '../constants/cat';
import PaymentEdit from './PaymentEdit';
import styled from '@emotion/styled';
import defaultImg from '../assets/images/receipt.jpg';

function PaymentDetail({
  title,
  price,
  time,
  name,
  receiptUrl,
  isExpense,
  catName,
  recordId,
  curledger,
  setCatList,
  catList,
  setEditState,
  setRecordList,
  recordList,
}) {
  const [isDelModalOpen, setIsDelModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newReceiptUrl, setNewReceiptUrl] = useState(receiptUrl);
  const handleEditBtn = () => {
    setIsEdit(true);
    setEditState(true);
  };
  
  // 일단 삭제하지말고 주석처리
  // useEffect(() => {
  //   setIsEdit(editState);
  // }, [editState]);

  return isEdit ? (
    <PaymentEdit
      categoryList={catList}
      title={title}
      price={price}
      time={time}
      name={name}
      catName={catName}
      curledger={curledger}
      recordId={recordId}
      setCatList={setCatList}
      setIsEditFalse={() => setIsEdit(false)}
      setIsEdit={setIsEdit}
      setEditState={setEditState}
      setRecordList={setRecordList}
      recordList={recordList}
    />
  ) : (
    <div className="accordion-body">
      <div className="vertical">
        <div className="vertical-line"></div>
        <div className="vertical-body">
          <div className="body-cat">
            <div className="vertical-dot"></div>

            <div className="my-btn">
              <input
                type="button"
                className={`record-cat`}
                style={{ backgroundColor: categoryColors[catName] }}
                value={catName}
              ></input>
            </div>
          </div>
          <div className="body-content">
            <div className="vertical-dot"></div>
            <span className="record-title-name">{title}</span>
          </div>
          <div className="body-price">
            <div className="vertical-dot"></div>
            <span className="record-price">
              {isExpense === '1' ? '-' + price.toLocaleString() : price.toLocaleString()}원
            </span>
          </div>

          <div className="body-receipt">
            <div className="vertical-dot"></div>
            <img className="receipt-img" src={receiptUrl ? receiptUrl : defaultImg} alt="receipt" />
          </div>
          <div className="body-time">
            <div className="vertical-dot"></div>
            <span className="record-info">
              {time} | {name}
            </span>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button
          className="del-btn"
          onClick={() => {
            setIsDelModalOpen(true);
          }}
        >
          삭제
        </button>
        {isDelModalOpen && (
          <CheckModal
            cancelFunc={() => setIsDelModalOpen(false)}
            acceptFunc={() => {
              setIsDelModalOpen(false)
              deleteRecordList({ recordId: recordId
              }).then(() => {
                setRecordList(recordList.filter(item => item.recordId !== recordId))
                }).catch(() => {
                alert('서버와의 연결이 원활하지 않습니다.');
                });
            }}
            title="삭제하시겠습니까?"
            content="삭제하시면 가계부에서 거래내역이 보이지 않습니다."
            cancelMsg="취소"
            acceptMsg="삭제"
          />
        )}
        <button className="edit-btn" onClick={handleEditBtn}>
          {' '}
          수정{' '}
        </button>
      </div>
    </div>
  );
}
const DefaultImg = styled.div`
  margin-left: 5px;
  width: 80px;
  height: 120px;
  border: dotted;
  line-height: 120px;
  text-align: center;
`
export default PaymentDetail;
