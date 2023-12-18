import React from 'react';
import moment from 'moment';

const DateComponent = ({ date, onSelectDate, selected }) => {
  const day =
    moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') ? 'Today' : moment(date).format('ddd');
  const dayNumber = moment(date).format('D');
  const fullDate = moment(date).format('YYYY-MM-DD');

  const handleDateClick = () => {
    onSelectDate(fullDate);
  };

  const cardStyle = {
    backgroundColor: '#eee',
    borderRadius: '10px',
    borderColor: '#ddd',
    padding: '10px',
    margin: '10px 5px',
    alignItems: 'center',
    height: '90px',
    width: '80px',
    cursor: 'pointer',
    ...(selected === fullDate && {
      backgroundColor: '#6146c6',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '24px',
    }),
  };

  const bigTextStyle = {
    fontWeight: 'bold',
    fontSize: '20px',
    ...(selected === fullDate && { color: '#fff' }),
  };

  const mediumTextStyle = {
    fontSize: '16px',
    ...(selected === fullDate && { color: '#fff', fontWeight: 'bold', fontSize: '24px' }),
  };

  return (
    <button onClick={handleDateClick} style={cardStyle}>
      <div style={bigTextStyle}>{day}</div>
      <div style={{ height: '10px' }} />
      <div style={mediumTextStyle}>{dayNumber}</div>
    </button>
  );
};

export default DateComponent;
