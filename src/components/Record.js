import React, { useState } from 'react';

import '../styles/record.css';
import moment from 'moment';

function Record({ value }) {
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
      <div className="record-container">
        <div className="record-info-area">
          <div className="record-info">14:53 | 홈플러스</div>
          <div className="record-cat">술</div>
        </div>

        <div className="record-title-area">
          <div className="record-title">
            <span className="record-title-name">홈플러스에서 술을 샀다</span>
            <i className="bi bi-receipt"></i>
          </div>
          <div className="record-price">-30,000원</div>
        </div>
        <div className="line"></div>
      </div>
      <div className="record-container">
        <div className="record-info-area">
          <div className="record-info">14:53 | 홈플러스</div>
          <div className="record-cat">술</div>
        </div>

        <div className="record-title-area">
          <div className="record-title">홈플러스에서 술을 샀다</div>
          <div className="record-price">-30,000원</div>
        </div>
        <div className="line"></div>
      </div>
      <div className="record-container">
        <div className="record-info-area">
          <div className="record-info">14:53 | 홈플러스</div>
          <div className="record-cat">술</div>
        </div>

        <div className="record-title-area">
          <div className="record-title">홈플러스에서 술을 샀다</div>
          <div className="record-price">-30,000원</div>
        </div>
        <div className="line"></div>
      </div>
      <btn className="more-btn">+ 더보기</btn>
    </div>
  );
}

export default Record;
