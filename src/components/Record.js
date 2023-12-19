import React, { useState } from 'react';
import '../styles/record.css';
import receiptImg from '../assets/images/receipt.jpg';
import CheckModal from '../components/CheckModal';

const records = [
  { time: '14:53', name: '홈플러스', cat: '술', title: '홈플에서 술삼', price: '30000' },
  { time: '16:53', name: '라공방', cat: '식사', title: '마라탕 먹음', price: '10000' },
  { time: '20:53', name: '다이소', cat: '장갑', title: '추워서 장갑삼', price: '2000' },
  { time: '20:53', name: '다이소', cat: '장갑', title: '추워서 장갑삼', price: '2000' },
  { time: '20:53', name: '다이소', cat: '장갑', title: '추워서 장갑삼', price: '2000' },
  { time: '20:53', name: '다이소', cat: '장갑', title: '추워서 장갑삼', price: '2000' },
];

function getColor(i) {
  switch (i) {
    case 0:
      return 'cat1';
    case 1:
      return 'cat2';
    case 2:
      return 'cat3';
    case 3:
      return 'cat4';
    case 4:
      return 'cat5';
    case 5:
      return 'cat6';
  }
}

function Record({ value }) {
  const listCount = records.length;
  const [recordCount, setRecordCount] = useState(3);
  const [checkCatBtn, setCheckCatBtn] = useState('술');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelModalOpen, setIsDelModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleCatBtn = (e) => {
    setCheckCatBtn(e.target.value);
  };

  return (
    <div>
      <div className="accordion mt-4 mb-4" id="accordionPanelsStayOpenExample">
        {listCount >= 3 &&
          records
            .map((r, i) => (
              <div className="accordion-item" key={i}>
                <h2 className="accordion-header" id={`panelsStayOpen-heading${i}`}>
                  <button
                    className="accordion-button"
                    type="button"
                    key={i}
                    data-bs-toggle="collapse"
                    data-bs-target={`#panelsStayOpen-collapse${i}`}
                    aria-expanded="true"
                    aria-controls={`panelsStayOpen-collapse${i}`}
                  >
                    <div className="record-container">
                      <div className="record-info-area">
                        <div className="record-info">
                          {r.time} | {r.name}
                        </div>
                        <div className={`record-cat ${getColor(i)}`}>{r.cat}</div>
                      </div>

                      <div className="record-title-area">
                        <div className="record-title">
                          <span className="record-title-name">{r.title}</span>
                          <i className="bi bi-receipt"></i>
                        </div>
                        <div className="record-price">-{r.price}원</div>
                      </div>
                      {/* <div className="line"></div> */}
                    </div>
                  </button>
                </h2>
                <div
                  id={`panelsStayOpen-collapse${i}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`panelsStayOpen-heading${i}`}
                >
                  <div className="accordion-body">
                    <div className="vertical">
                      <div className="vertical-line"></div>
                      <div className="vertical-body">
                        <div className="body-cat">
                          <div className="vertical-dot"></div>

                          <div className="my-btn">
                            <input type="button" onClick={handleCatBtn} className="cat-btn cat-4" value="술"></input>
                          </div>
                          {/*
                          <div className="my-btn">
                            <input type="button" onClick={handleCatBtn} className="cat-btn cat-1" value="전체"></input>
                            {checkCatBtn === '전체' ? <i className="bi bi-check"></i> : ''}
                          </div>
                          <div className="my-btn">
                            <input type="button" onClick={handleCatBtn} className="cat-btn cat-2" value="교통"></input>
                            {checkCatBtn === '교통' ? <i className="bi bi-check"></i> : ''}
                          </div>
                          <div className="my-btn">
                            <input type="button" onClick={handleCatBtn} className="cat-btn cat-3" value="쇼핑"></input>
                            {checkCatBtn === '쇼핑' ? <i className="bi bi-check"></i> : ''}
                          </div>
                          <div className="my-btn">
                            <input type="button" onClick={handleCatBtn} className="cat-btn cat-4" value="술"></input>
                            {checkCatBtn === '술' ? <i className="bi bi-check"></i> : ''}
                          </div>
                          <div className="my-btn">
                            <input
                              type="button"
                              onClick={() => {
                                setIsModalOpen(true);
                              }}
                              className="cat-plus"
                              value="+"
                            ></input>
                             {isModalOpen == true ? (
                              <CheckModal
                                isOpen={isModalOpen}
                                modalClose={() => setIsModalOpen(false)}
                                title="카테고리 추가"
                                content="만들어야함"
                                cancelMsg="취소"
                                acceptMsg="확인"
                              />
                            ) : (
                              ''
                            )} 
                            </div> */}
                        </div>
                        <div className="body-content">
                          <div className="vertical-dot"></div>
                          <span className="record-title-name">{r.title}</span>
                        </div>
                        <div className="body-price">
                          <div className="vertical-dot"></div>
                          <span className="record-price">-{r.price}원</span>
                        </div>

                        <div className="body-receipt">
                          <div className="vertical-dot"></div>
                          <img className="receipt-img" src={receiptImg} alt="receipt" />
                        </div>
                        <div className="body-time">
                          <div className="vertical-dot"></div>
                          <span className="record-info">
                            {r.time} | {r.name}
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
                        />)}
                      <button
                        className="edit-btn"
                        onClick={() => {
                          setIsEditModalOpen(true);
                        }}
                      >
                        수정
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
            .slice(0, recordCount)}
        {/* <CheckModal /> */}
        {listCount > 3 && recordCount < records.length && (
          <button className="more-btn" onClick={() => setRecordCount(recordCount + 3)}>
            + 더보기
          </button>
        )}
        {listCount > 3 && recordCount > 3 && (
          <button className="more-btn" onClick={() => setRecordCount(3)}>
            - 접기
          </button>
        )}
      </div>
    </div>
  );
}

export default Record;
