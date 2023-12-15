import React, { useState, useRef, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../styles/FNLGBar.css';
import iconAddFNLG from '../assets/images/iconAddFNLG.png';
import iconUnderArrow from '../assets/images/iconUnderArrow.png';
import iconX from '../assets/images/iconX.png';
import styled from "@emotion/styled";

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: 150px;
  overflow-y: scroll;
  position: relative;
`;

const ListCenter = styled.div`
  box-sizing: border-box;
  border-top: 1.3px solid black;
  border-bottom: 1.3px solid black;
  height: 50px;
  position: sticky;
  top: 50px;
`;

const ListItem = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ isSelected }) => isSelected && "bold"};
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.4)};
`;

function FNLGBar({ list, onSelectedChange }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const SCROLL_DEBOUNCE_TIME = 1;

  const newList = ["", ...list, ""];
  const ref = useRef(null);
  const [selected, setSelected] = useState(1);
  const itemRefs = useRef([]);
  const timerRef = useRef(null);
  const ITEM_HEIGHT = 50;

  const handleScroll = () => {
    if (ref.current) {
      clearTimeout(timerRef.current);
      if (ref.current.scrollTop < ITEM_HEIGHT) {
        ref.current.scrollTop = ITEM_HEIGHT;
      }
      timerRef.current = setTimeout(() => {
        const index = Math.floor((ref.current.scrollTop + ITEM_HEIGHT / 2) / ITEM_HEIGHT);
        if (list[index] !== "") {
          setSelected(index);
          itemRefs.current[index]?.scrollIntoView({behavior: "smooth", block: "center"});
          onSelectedChange && onSelectedChange(newList[index]);
        }
      }, SCROLL_DEBOUNCE_TIME);
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = selected * ITEM_HEIGHT;
    }
  }, [selected]);

  return (
    <div className='FNLGBar'>
      <button className='selectFNLG' onClick={handleShow}>
        <p>식비 가계부</p>
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
            <List ref={ref} onScroll={handleScroll}>
              <ListCenter />
              {newList.map((item, index) => (
                <ListItem key={index} isSelected={index === selected} ref={(el) => (itemRefs.current[index] = el)}>
                  {item}
                </ListItem>
              ))}
            </List>
          </div>
          <div className='selectCheck'>
            확인
          </div>
        </div>
      </Offcanvas>
      <img className='iconAddFNLG' src={iconAddFNLG} alt="이미지" />
    </div>
  );
}

export default FNLGBar;
