import React, { useState } from 'react';
import '../styles/PaymentEdit.css';
import receiptImg from '../assets/images/receipt.jpg';
import CheckModal from '../components/CheckModal';
import InputModal from '../components/InputModal';

function PaymentEdit({title, price, time, name, setIsEditFalse, categoryList, addCatList}) {
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  
  const [checkCatBtn, setCheckCatBtn] = useState('술');
  const [inputTitle, setInputTitle] = useState(title);
  const [inputPrice, setInputPrice] = useState(price);

  const handleCatBtn = (e) => {
    setCheckCatBtn(e.target.value);
  };

  return (
    <div className="accordion-body">
      <div className="vertical">
        <div className="vertical-line"></div>
        <div className="vertical-body">
          <div className="body-cat">
            <div className="vertical-dot"></div>
            {categoryList.map((item, index) => (
              <div className="my-btn" key={index}>
                <input type="button" onClick={handleCatBtn} className={`cat-btn cat${index+1}`} value={item}></input>
                {checkCatBtn === item ? <i className="bi bi-check"></i> : ''}
              </div>
            ))}
            <div className="my-btn">
              <input
                type="button"
                onClick={() => {
                  setIsInputModalOpen(true);
                }}
                className="cat-plus"
                value="+"
              ></input>
                {isInputModalOpen && (
                <InputModal
                  title="카테고리 추가"
                  content="만들어야함"
                  cancelMsg="취소"
                  acceptMsg="확인"
                  acceptFunc={(catItem) => {addCatList(catItem); setIsInputModalOpen(false)}}
                  cancelFunc={() => setIsInputModalOpen(false)} />)} 
              </div>
          </div>
          <div className="body-content">
            <div className="vertical-dot"></div>
            <input className='inputBox' type="text" value={inputTitle} onChange={(e) => { setInputTitle(e.target.value) }} />
          </div>
          <div className="body-price">
            <div className="vertical-dot"></div>
            <input className='inputBox' type="text" value={inputPrice} onChange={(e) => { setInputPrice(e.target.value) }} />
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
        <button className="del-btn" onClick={() => setIsCancelModalOpen(true)}>취소</button>
        {isCancelModalOpen && (
          <CheckModal
            cancelFunc={() => setIsCancelModalOpen(false)}
            acceptFunc={() => {setIsCancelModalOpen(false); setIsEditFalse();}}
            title="취소하시겠습니까?"
            content="취소하시면 모든 수정 내역이 취소됩니다."
            cancelMsg="취소"
            acceptMsg="확인"
          />)}
        <button className="edit-btn">저장</button>
      </div>
    </div>
  )
}

export default PaymentEdit;
