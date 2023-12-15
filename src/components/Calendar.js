import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css';
import moment from 'moment';

const dayList = ['2023-12-01', '2023-12-05', '2023-12-07', '2023-12-11', '2023-12-15', '2023-12-23'];

function addContent({ date }) {
  const contents = [];
  if (dayList.find((day) => day === moment(date).format('YYYY-MM-DD'))) {
    contents.push(
      <>
        <div className="dot-box">
          <div className="dot" style={{ position: 'absolute' }}></div>
        </div>
      </>,
    );
  }
  return <div>{contents}</div>;
}

function ReactCalendar() {
  const [value, onChange] = useState(new Date()); // 초기값은 현재 날짜

  return (
    <div>
      <Calendar
        locale="kor"
        onChange={onChange}
        formatDay={(locale, date) => moment(date).format('DD')}
        value={value}
        tileContent={addContent}
        showNeighboringMonth={true}
        next2Label={null}
        prev2Label={null}
      />
      <div className="container">
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

export default ReactCalendar;
