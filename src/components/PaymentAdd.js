import React, { useState } from 'react';
import '../styles/PaymentAdd.css';
import receiptImg from '../assets/images/receipt.jpg';
import CheckModal from '../components/CheckModal';
import InputModal from '../components/InputModal';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function PaymentAdd({categoryList, addCatList}) {
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  
  const [checkCatBtn, setCheckCatBtn] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [inputTime, setInputTime] = useState('');
  const [inputName, setInputName] = useState('');

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);
  
    return (
      <button
        type="button"
        style={{ fontFamily: 'KBTitleB', color: '#818181', border: 'none', backgroundColor: 'white' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  const handleCatBtn = (e) => {
    setCheckCatBtn(e.target.value);
  };

  return (
    <Accordion defaultActiveKey="0">
        <CustomToggle eventKey="0">+ 내역추가</CustomToggle>
        <Accordion.Collapse eventKey="0">
          <div>
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
                    시간 | 이름
                  </span>
                </div>
              </div>
            </div>
            <div className="btn-container">
              <button className="del-btn" onClick={() => setIsCancelModalOpen(true)}>취소</button>
              {isCancelModalOpen && (
                <CheckModal
                  cancelFunc={() => setIsCancelModalOpen(false)}
                  acceptFunc={() => {setIsCancelModalOpen(false);}}
                  title="취소하시겠습니까?"
                  content="취소하시면 모든 작성 내역이 취소됩니다."
                  cancelMsg="취소"
                  acceptMsg="확인"
                />)}
              <button className="edit-btn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse" aria-expanded="true" aria-controls="#panelsStayOpen-collapse">작성</button>
            </div>
          </div>
        </Accordion.Collapse>
    </Accordion>
  )
}

export default PaymentAdd;
