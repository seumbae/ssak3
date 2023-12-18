import React from 'react';
import '../styles//PredictMotive.css'
import iconPredictMotive from '../assets/images/iconPredictMotive.png'

function PredictMotive({saveMoney}) {
  return (
    <div className='PredictMotive'>
      <p className='motiveMsg'>이 기세면 한 달 뒤<br />
      예상 절약금액 {saveMoney.toLocaleString()}원!</p>
      <img className='motiveIcon' src={iconPredictMotive} alt="이미지" />
    </div>
  );
}

export default PredictMotive;
 