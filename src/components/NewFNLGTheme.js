import React, { useState } from 'react';
import newcoli from '../assets/newcoli.png';
import { ChevronDown } from 'react-bootstrap-icons';
import newarrow from '../assets/newarrow.png';
import NextBtnInComplete from './NextBtnIncomplete';
import NextBtnComplete from './NextBtnComplete';
import { Offcanvas } from 'react-bootstrap';
import iconX from '../assets/images/iconX.png';
import Picker from './Picker';
import '../styles/NewFNLG.css'

function NewFNLGTheme({ setThemeShow, setLastBudgetShow, themeList, selectedTheme, setSelectedTheme }) {
  const [nextBtnShow, setNextBtnShow] = useState(false);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("전체");
  const [checked, setChecked] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNextClick = () => {
    setNextBtnShow(true);
    setThemeShow(false);
    setLastBudgetShow(true);
  };

  const handleCheck = () => {
    setSelectedTheme(themeList.find(obj => obj.themeName === selected));
    handleClose();
    setChecked(true);
  };

  return (
    <div className="NewFNLGThemeDiv">
      <div>
        <div className="NewFNLGThemeTitle">
          <div>테마를</div>
          <div>선택해주세요!</div>
        </div>
      </div>
      <button className="NewFNLGThemeSelect" onClick={handleShow}>
        <span>{selected}</span>
        <ChevronDown className="FNLG-downIcon" />
      </button>
      <div>
        <div className="NewFNLGThemeText">
          <div>&apos;{selected}&apos; 관련 항목</div>
          <div> 가계부를 작성할게요.</div>
          <img src={newcoli} alt="newcoli"></img>
        </div>
      </div>
      {checked ? (
        <button className="next-btn-complete fs-2" onClick={handleNextClick}>
          확인
        </button>
      ) : (
        <div className="next-btn-incomplete fs-2">
          다음
        </div>
      )}
      <Offcanvas className="Offcanvas" show={show} onHide={handleClose} placement="bottom">
        <div className="OffcanvasContainer">
          <div className="selectTitle">
            <p>가계부 선택</p>
            <button className="closeBtn" onClick={handleClose}>
              <img className="iconX" src={iconX} alt="이미지" />
            </button>
          </div>
          <div className="selectList">
            <Picker list={themeList.map((obj) => obj.themeName)} getSelected={(selected) => setSelected(selected)} />
          </div>
          <div className="selectCheck" onClick={handleCheck} onKeyDown={(e) => console.log(e.key)} role="presentation">
            확인
          </div>
        </div>
      </Offcanvas>
    </div>
  );
}

export default NewFNLGTheme;
