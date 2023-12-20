import React, { useState } from 'react';
import '../styles/record.css';
import receiptImg from '../assets/images/receipt.jpg';
import CheckModal from '../components/CheckModal';

function PaymentDetail({title, price, time, name, setIsEditTrue}) {
  const [isDelModalOpen, setIsDelModalOpen] = useState(false);

  return (
    <div className="accordion-body">
      <div className="vertical">
        <div className="vertical-line"></div>
        <div className="vertical-body">
          <div className="body-cat">
            <div className="vertical-dot"></div>
            <div className="my-btn">
              <input type="button" className="cat-btn cat-4" value="술"></input>
            </div>
          </div>
          <div className="body-content">
            <div className="vertical-dot"></div>
            <span className="record-title-name">{title}</span>
          </div>
          <div className="body-price">
            <div className="vertical-dot"></div>
            <span className="record-price">-{price}원</span>
          </div>

          <div className="body-receipt">
            <div className="vertical-dot"></div>
            <img className="receipt-img" src={receiptImg} alt="receipt" />
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
        <button className="del-btn" onClick={() => setIsDelModalOpen(true)}>
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
          />)}
        <button className="edit-btn" onClick={setIsEditTrue}> 수정 </button>
      </div>
    </div>
  )
}

export default PaymentDetail;
