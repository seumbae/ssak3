import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from "@emotion/styled";
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
    <FNLGBarDiv>
      <SelectButton onClick={handleShow} role='presentation'>
        <p>{defaultGoal}</p>
        <IconUnderArrow src={iconUnderArrow} alt="이미지" />
      </SelectButton>
      <StyledOffcanvas className="Offcanvas" show={show} onHide={handleClose} placement='bottom'>
        <OffcanvasContainer>
          <SelectTitle>
            <p>가계부 선택</p>
            <button className='closeBtn' onClick={handleClose}>
              <img src={iconX} alt="이미지" />
            </button>
          </SelectTitle>
          <SelectList>
            <Picker list={FNLGList} getSelected={(selected) => setSelected(selected) } />
          </SelectList>
          <SelectCheck onClick={handleCheck} role='presentation'>
            확인
          </SelectCheck>
        </OffcanvasContainer>
      </StyledOffcanvas>
      <IconAddFNLG src={iconAddFNLG} alt="이미지" />
    </FNLGBarDiv>
  );
}

const FNLGBarDiv = styled.div`
  width: 360px;
  height: 40px;
  padding-bottom: 10px;
  border-width: 0 0 2px;
  border-style: solid;
  border-color: #9d9d9d;
  display: flex;
  justify-content: space-between;
`

const SelectButton = styled.div`
  width: 150px;
  height: 28px;
  padding: 0 5px 0 10px;
  background-color: white;
  border-width: 1.5px;
  border-style: solid;
  border-color: black;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font: #123123;
    font-family: KBTextM;
    margin: 0;
  }
`

const StyledOffcanvas = styled(Offcanvas)`
  min-height: 300px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`

const OffcanvasContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SelectTitle = styled.div`
  font-family: KBTitleB;
  font-size: 24px;
  height: 60px;
  line-height: 60px;
  padding: 0 15px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  justify-content: space-between;
  button {
    border: none;
    background-color: white;
    align-items: center;
    padding: 0;
  }
`

const SelectList = styled.div`
  height: 180px;
  padding-top: 15px;
`

const IconAddFNLG = styled.img`
  margin: 2.5px 5px 0 0;
  width: 25px;
  height: 25px;
`
const IconUnderArrow = styled.img`
  width: 15px;
  height: 15px;
`
const SelectCheck = styled.div`
  background-color: #ffcc00;
  height: 60px;
  line-height: 60px;
  font-family: KBTextB;
  font-size: 24px;
  text-align: center;
`

export default FNLGBar;
