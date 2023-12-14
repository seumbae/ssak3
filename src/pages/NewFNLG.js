import React from 'react';
import '../styles/NewFNLG.css';
import newcoli from '../assets/newcoli.png';
import newlamu from '../assets/newlamu.png';

function NewFNLG() {
  return (
    <div>
      <div>
        <div>테마를 선택해주세요!</div>
        <div>여긴 셀렉트!</div>
        <div>&apos;테마&apos; 관련 항목</div>
        <div> 가계부를 작성할게요.</div>
        <img src={newcoli} alt="newcoli"></img>
      </div>

      <div>
        <div>테마를 선택해주세요!</div>
        <div>여긴 셀렉트!</div>
        <div>&apos;테마&apos; 관련 항목</div>
        <div> 가계부를 작성할게요.</div>
        <img src={newcoli} alt="newcoli"></img>
      </div>

      <div>
        <div>400,500원</div>
        <div>지난 달 패션/쇼핑에 소비하신 금액이에요</div>
        <img src={newlamu} alt="newlamu"></img>
      </div>

      <div>
        <div>350,000원</div>
        <div>저희가 추천하는 패션/쇼핑 예산이에요</div>
        <div>지난 달보다 50,500원을 아낄 수 있어요</div>
        <img src={newlamu} alt="newlamu"></img>
      </div>

      <div>
        <div>목표를 입력해주세요!</div>
        <div>해당 목표는 가계부의 제목으로 설정됩니다</div>
        <div> 텍스트 입력창</div>
        <img src={newlamu} alt="newlamu"></img>
      </div>
    </div>
  );
}

export default NewFNLG;
