import React, { useState, useRef, useEffect } from 'react';
import styled from "@emotion/styled";

function Picker({ list, getSelected }) {
  const SCROLL_DEBOUNCE_TIME = 100;

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
          getSelected && getSelected(newList[index]);
        }
      }, SCROLL_DEBOUNCE_TIME);
    }
  };

  const handleClick = (index) => {
    setSelected(index);
    itemRefs.current[index].scrollIntoView({behavior: "smooth", block: "center"});
    getSelected && getSelected(newList[index]);
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = selected * ITEM_HEIGHT;
      }
  }, []);

  return (
    <List ref={ref} onScroll={handleScroll}>
      <ListCenter />
      {newList.map((item, index) => (
        <ListItem key={index} isSelected={index === selected} ref={(el) => (itemRefs.current[index] = el)}
        onClick={()=>{if(item) handleClick(index)}}>
          {item}
        </ListItem>
      ))}
    </List>
  );
}

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
  border-top: 1.3px solid #b0b0b0;
  border-bottom: 1.3px solid #b0b0b0;
  height: 50px;
  position: sticky;
  top: 50px;
`;

const ListItem = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: KBTitleL;
  font-size: 16px;
  font-weight: ${({ isSelected }) => isSelected && "bold"};
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.4)};
`;

export default Picker;
