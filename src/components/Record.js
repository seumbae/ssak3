import React, { useState, useRef, useEffect } from 'react';
import '../styles/record.css';
import moment from 'moment';
import receiptImg from '../assets/images/receipt.jpg';

const records = [
  { time: '14:53', name: '홈플러스', cat: '술', title: '홈플에서 술삼', price: '30000' },
  { time: '16:53', name: '라공방', cat: '식사', title: '마라탕 먹음', price: '10000' },
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
  const [recordList, setRecordList] = useState([]);
  const [curList, setCurList] = useState(3);
  const listCount = records.length;
  console.log(listCount);
  return (
    <div>
      <div className="accordion mt-4 mb-4" id="accordionPanelsStayOpenExample">
        {records.map((r, i) => (
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
                      <div className="cat-btn cat-1">전체</div>
                      <div className="cat-btn cat-2">교통</div>
                      <div className="cat-btn cat-3">쇼핑</div>
                      <div className="cat-btn cat-4">술</div>
                      <div className="cat-btn cat-plus">+</div>
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
                  <button className="del-btn">삭제</button>
                  <button className="edit-btn">수정</button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {listCount > 3 && listCount >= curList && (
          <btn className="more-btn" onClick={() => setCurList(records.current + 1)}>
            + 더보기
          </btn>
        )}
        {records?.total > 3 && records.total <= records.current && (
          <btn className="more-btn" onClick={() => setCurList(0)}>
            - 접기
          </btn>
        )}
        {/* <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code>{' '}
              className. This is the second imagine this being filled with some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code>{' '}
              class. This is the thirdordion body. Nothing more exciting happening here in terms of content, but just
              filling up the space to make it look, at least at first glance, a bit more representative of how this
              would look in a real-world application.
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Record;
