import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../styles/FNLGBar.css';
import iconAddFNLG from '../assets/images/iconAddFNLG.png';
import iconUnderArrow from '../assets/images/iconUnderArrow.png';
import iconX from '../assets/images/iconX.png';
import Picker from "./Picker";

function FNLGBar({ FNLGList, getFNLG, defaultGoal }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selected, setSelected] = useState(defaultGoal);

  const handleCheck = () => {
    getFNLG && getFNLG(selected);
    handleClose();
  }

  return (
    <div className='FNLGBar'>
      <button className='selectFNLG' onClick={handleShow}>
        <p>{defaultGoal}</p>
        <img className='iconUnderArrow' src={iconUnderArrow} alt="이미지" />
      </button>
      <Offcanvas className="Offcanvas" show={show} onHide={handleClose} placement='bottom'>
        <div className='OffcanvasContainer'>
          <div className='selectTitle'>
            <p>가계부 선택</p>
            <button className='closeBtn' onClick={handleClose}>
              <img className='iconX' src={iconX} alt="이미지" />
            </button>
          </div>
          <div className='selectList'>
            <Picker list={FNLGList} getSelected={(selected) => setSelected(selected) } />
          </div>
          <div className='selectCheck' onClick={handleCheck} onKeyDown={(e) => console.log(e.key)} role='presentation'>
            확인
          </div>
        </div>
      </Offcanvas>
      <img className='iconAddFNLG' src={iconAddFNLG} alt="이미지" />
    </div>
  );
}

export default FNLGBar;
