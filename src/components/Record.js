import React, { useState } from 'react';
import '../styles/record.css';
import moment from 'moment/moment';
import PaymentEdit from './PaymentEdit';
import PaymentDetail from './PaymentDetail';
import categoryColors from '../constants/cat';

const records = [
  { time: '14:53', name: '홈플러스', cat: '술', title: '홈플에서 술삼', price: '30000' },
  { time: '16:53', name: '라공방', cat: '식사', title: '마라탕 먹음', price: '10000' },
  { time: '20:53', name: '다이소', cat: '장갑', title: '추워서 장갑삼', price: '2000' },
  { time: '20:53', name: '다이소', cat: '장갑', title: '추워서 장갑삼', price: '2000' },

  { time: '20:53', name: '다이소', cat: '장갑', title: '추워서 장갑삼', price: '2000' },

  { time: '20:53', name: '다이소', cat: '장갑', title: '추워서 장갑삼', price: '2000' },
];

function Record({
  setCatList,

  curledger,
  value,
  recordList,
  setRecordList,
  newDateList,
  catList,
}) {
  const [recordCount, setRecordCount] = useState(3);
  const [receiptUrl, setReceiptUrl] = useState('');
  return (
    <div>
      <div className="accordion mt-4 mb-4" id="accordionPanelsStayOpenExample">
        {newDateList.includes(moment(value).format('YYYY-MM-DD')) ? (
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
                        <div
                          className={`record-cat`}
                          style={{ backgroundColor: categoryColors[r.categoryName] || '#808080' }}
                        >
                          {r.categoryName}
                        </div>
                      </div>

                      <div className="record-title-area">
                        <div className="record-title">
                          <span className="record-title-name">{r.tranName}</span>
                          <i className="bi bi-receipt"></i>
                        </div>
                        <div className="record-price">
                          {r.isExpense === '1' ? '-' + r.tranAmount.toLocaleString() : r.tranAmount.toLocaleString()}원
                        </div>
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
                  <PaymentDetail
                    key={i}
                    title={r.tranName}
                    price={r.tranAmount}
                    time={r.tranTime}
                    name={r.tranPlace}
                    catName={r.categoryName}
                    recordId={r.recordId}
                    isExpense={r.isExpense}
                    curledger={curledger}
                    setCatList={setCatList}
                    catList={catList}
                    receiptUrl={r.receiptUrl}
                    setRecordList={setRecordList}
                    recordList={recordList}
                  />
                </div>
              </div>
            ))
            .slice(0, recordCount)
        ) : (
          <div className="none-info">해당 내역이 없습니다</div>
        )}
        {/* <CheckModal /> */}
        {recordList.filter((record) => record.tranYmd === moment(value).format('YYYY-MM-DD')).length > 3 &&
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
