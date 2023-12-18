import React, { useState } from 'react';
import '../styles/record.css';
import moment from 'moment';

const records = [
  { time: '14:53', name: '홈플러스', cat: '술', title: '홈플에서 술삼', price: '30000' },
  { time: '16:53', name: '라공방', cat: '식사', title: '마라탕 먹음', price: '10000' },
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

function Record(value) {
  return (
    <div>
      <div className="title-container">
        <div className="record-main-title mt-4 row">
          <div className="col-sm"></div>
          <div className="today col-sm">{moment(value).format('YYYY.MM.DD')}</div>
          <div className="more-record-btn col-sm">
            <span className="plus">+ 내역추가</span>
          </div>
        </div>
      </div>
      {records.map((r, i) => (
        <div className="record-container" key={i}>
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
          <div className="line"></div>
        </div>
      ))}

      <btn className="more-btn">+ 더보기</btn>
    </div>
  );
}

export default Record;
