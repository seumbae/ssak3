import React, { useEffect, useState } from 'react';
import '../styles/record.css';
import receiptImg from '../assets/images/receipt.jpg';
import CheckModal from '../components/CheckModal';
import categoryColors from '../constants/cat';
import PaymentEdit from './PaymentEdit';

function PaymentDetail({
  key,
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
  editState,
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
      setNewRecordData={setRecordList}
      setReceiptUrl={setNewReceiptUrl}
      receiptUrl={newReceiptUrl} //이러케 하면 안됨.
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
            {receiptUrl ? (
              <img className="receipt-img" src={receiptUrl} alt="receipt" />
            ) : (
              <img className="receipt-img" src={receiptImg} alt="receipt" />
            )}
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
            acceptFunc={() => setIsDelModalOpen(false)}
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

export default PaymentDetail;
