import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

function ReactCalendar() {
  const [value, onChange] = useState(new Date()); // 초기값은 현재 날짜

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <div className="text-gray-500 mt-4">{moment(value).format('YYYY년 MM월 DD일')}</div>
    </div>
  );
}

export default ReactCalendar;
