import React, { useState } from 'react';
import '../styles/record.css';
import moment from 'moment/moment';
import PaymentEdit from './PaymentEdit';
import PaymentDetail from './PaymentDetail';

const records = [
  { time: '14:53', name: '홈플러스', cat: '술', title: '홈플에서 술삼', price: '30000' },
  { time: '16:53', name: '라공방', cat: '식사', title: '마라탕 먹음', price: '10000' },
  { time: '20:53', name: '다이소', cat: '장갑', title: '추워서 장갑삼', price: '2000' },
  { time: '20:53', name: '다이소', cat: '장갑', title: '추워서 장갑삼', price: '2000' },
  { time: '20:53', name: '다이소', cat: '장갑', title: '추워서 장갑삼', price: '2000' },
  { time: '20:53', name: '다이소', cat: '장갑', title: '추워서 장갑삼', price: '2000' },
];

function getColor(val) {
  switch (val) {
    case '외식':
      return 'cat1';
    case '배달':
      return 'cat2';
    case '배달음식':
      return 'cat3';
    case '점심':
      return 'cat4';
    case '저녁':
      return 'cat5';
    case '야식':
      return 'cat6';
    default:
      return 'cat6';
  }
}

function Record({ value, recordList }) {
  const listCount = recordList.length;
  const [recordCount, setRecordCount] = useState(3);
  const [isEdit, setIsEdit] = useState(false);
  const catList = ['술', '야식', '과자'];

  const addCatList = (catItem) => {
    catList.push(catItem);
  }

  return (
    <div>
      <div className="accordion mt-4 mb-4" id="accordionPanelsStayOpenExample">
        {listCount >= 3 &&
          recordList
            .filter((record) => record.tranYmd === moment(value).format('YYYY-MM-DD'))
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
                          {r.tranTime} | {r.tranPlace}
                        </div>
                        <div className={`record-cat ${getColor(r.categoryName)}`}>{r.categoryName}</div>
                      </div>

                      <div className="record-title-area">
                        <div className="record-title">
                          <span className="record-title-name">{r.tranName}</span>
                          <i className="bi bi-receipt"></i>
                        </div>
                        <div className="record-price">-{r.tranAmount}원</div>
                      </div>
                    </div>
                  </button>
                </h2>
                <div
                  id={`panelsStayOpen-collapse${i}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`panelsStayOpen-heading${i}`}
                >
                  { isEdit? <PaymentEdit categoryList={catList} title={r.title} price={r.price} time={r.time} name={r.name} setIsEditFalse={() => {setIsEdit(false)}} addCatList={(catItem) => addCatList(catItem)} /> :
                    <PaymentDetail title={r.title} price={r.price} time={r.time} name={r.name} setIsEditTrue={() => {setIsEdit(true)}} />
                  }
                </div>
              </div>
            ))
            .slice(0, recordCount)}
        {recordList.filter((record) => record.tranYmd === moment(value).format('YYYY-MM-DD')).length > 3 > 3 &&
          recordCount < records.length && (
            <button className="more-btn" onClick={() => setRecordCount(recordList.length)}>
              + 더보기
            </button>
          )}
        {recordList.filter((record) => record.tranYmd === moment(value).format('YYYY-MM-DD')).length > 3 &&
          recordCount > 3 && (
            <button className="more-btn" onClick={() => setRecordCount(3)}>
              - 접기
            </button>
          )}
      </div>
    </div>
  );
}

export default Record;
