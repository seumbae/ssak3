import React, { useState } from 'react';
import styled from '@emotion/styled'
import AccordionCheckModal from '../components/AccordionCheckModal';
import InputModal from '../components/InputModal';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function PaymentAdd({date, categoryList}) {
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  
  const [inputSort, setInputSort] = useState('지출');
  const [inputCategory, setInputCategory] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [inputReceipt, setInputReceipt] = useState('');
  const [inputTime, setInputTime] = useState('');
  const [inputShopName, setInputShopName] = useState('');

  const SortBtn = styled.label`
    ${(props) => {
      const text = props.children;
      if (text === inputSort) {
        return `
          color: white;
          background-color: #9647ff;
        `;
      } else {
        return `
          color: #9647ff;
          background-color: white;
        `
      }
    }}
    border-radius: 15px;
    border: 1px solid #9647ff;
    text-align: center;
    font-family: KBFG Text;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 5px;

    cursor: pointer;

    width: 45px;
    height: 25px;
    line-height: 25px;
    flex-shrink: 0;
    align-items: center;
  `

  function initInput() {
    setInputSort('지출');
    setInputCategory('');
    setInputTitle('');
    setInputPrice('');
    setInputReceipt('');
    setInputTime('');
    setInputShopName('');
  }

  function handleOnChange(receipt) {
    if (receipt) {
      setInputReceipt(URL.createObjectURL(receipt));
    }
  }

  function AccordionBtn({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);
    return (
      <button
        type="button"
        style={{ fontFamily: 'KBTitleB', color: '#818181', border: 'none', backgroundColor: 'white' }}
        onClick={() => {decoratedOnClick(); initInput();}}
      >
        {children}
      </button>
    );
  }

  function AccordionAddBtn({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);
    return (
      <AddBtn
        type="button"
        onClick={() => {decoratedOnClick(); initInput();}}
      >
        {children}
      </AddBtn>
    );
  }

  const handleCatBtn = (e) => {
    setInputCategory(e.target.value);
  };

  return (
    <Accordion>
      <ToggleBox>
        <AccordionBtn eventKey="0">+ 내역추가</AccordionBtn>
      </ToggleBox>
      <Accordion.Collapse eventKey="0">
        <div>
          <VerticalLineBox className="vertical">
            <BodyBox>
              <VerticalDot />
              분류
              <MarginLeftBox px="8">
              <HiddenInput
                type="checkbox"
                id="inputIncome"
                onClick={() => {
                  setInputSort('수입');
                }}
              ></HiddenInput>
              <SortBtn htmlFor="inputIncome">
                수입
              </SortBtn>
              <HiddenInput
                type="checkbox"
                id="inputOutgoing"
                onClick={() => {
                  setInputSort('지출');
                }}
              ></HiddenInput>
              <SortBtn htmlFor="inputOutgoing">
                지출
              </SortBtn>
              </MarginLeftBox>
            </BodyBox>
            <BodyBox>
              <VerticalDot />
              카테고리
              <CatBox>
                <DefaultCatBox>
                  {categoryList.map((item, index) => (
                    <MyBtn key={index}>
                      <CatBtn num={index + 1} type="button" onClick={handleCatBtn} value={item} />
                      {(inputCategory === item) && <i className="bi bi-check"></i>}
                    </MyBtn>
                  ))}
                </DefaultCatBox>
                <div className="my-btn">
                  <CatPlusBtn type="button" onClick={() => setIsInputModalOpen(true)} value="+" />
                    {isInputModalOpen && (
                    <InputModal
                      title="카테고리 추가"
                      cancelMsg="취소"
                      acceptMsg="확인"
                      acceptFunc={() => setIsInputModalOpen(false)}
                      cancelFunc={() => setIsInputModalOpen(false)} />)} 
                  </div>
              </CatBox>
            </BodyBox>
            <BodyBox>
              <VerticalDot />
              내역<br/>
                <ClearBtn onClick={() => setInputTitle('')}>x</ClearBtn>
                <InputBox type="text" value={inputTitle} onChange={(e) => { setInputTitle(e.target.value) }} />
            </BodyBox>
            <BodyBox>
              <VerticalDot />
              금액<br/>
                <ClearBtn onClick={() => setInputPrice('')}>x</ClearBtn>
                <InputBox type="text" value={inputPrice} onChange={(e) => { setInputPrice(e.target.value) }} />
            </BodyBox>
            <BodyBox>
              <VerticalDot />
              영수증<br/>
              <AddImgBox>
                <label htmlFor="add_file">
                  <div className="addImg">
                    {inputReceipt ? <img src={inputReceipt} alt="inputReceipt" /> : <DefaultImg>+</DefaultImg>}
                  </div>
                </label>
                <input type="file" id="add_file" accept="image/*" onChange={(e) => handleOnChange(e.target.files[0])}/>
              </AddImgBox>
            </BodyBox>
            <BodyBox>
              <VerticalDot />
              거래시각<br/>
              <ClearBtn onClick={() => setInputTime('')}>x</ClearBtn>
              <InputBox type="text" value={inputTime} onChange={(e) => { setInputTime(e.target.value) }} />
            </BodyBox>
            <BodyBox>
              <VerticalDot />
              상호명<br/>
              <ClearBtn onClick={() => setInputShopName('')}>x</ClearBtn>
              <InputBox type="text" value={inputShopName} onChange={(e) => { setInputShopName(e.target.value) }} />
              
            </BodyBox>
            <Notice>
              거래시각, 상호명은 변경할 수 없습니다.
            </Notice>
          </VerticalLineBox>
          <BtnBox>
            <CancelBtn onClick={() => setIsCancelModalOpen(true)}>취소</CancelBtn>
            {isCancelModalOpen && (
              <AccordionCheckModal
                cancelFunc={() => setIsCancelModalOpen(false)}
                acceptFunc={() => {initInput(); setIsCancelModalOpen(false);}}
                title="취소하시겠습니까?"
                content="취소하시면 모든 작성 내역이 취소됩니다."
                cancelMsg="취소"
                acceptMsg="확인"
              />)}
            <AccordionAddBtn type="button">작성</AccordionAddBtn>
          </BtnBox>
        </div>
      </Accordion.Collapse>
    </Accordion>
  )
}

const MyBtn = styled.div`
  position: relative;
  display: inline-block;
  .bi-check {
    position: absolute;
    top: -4px;
    right: -2px;
    color: red;
  }
`

const DefaultCatBox = styled.div`
  overflow-x: scroll;
  display: flex;
  width: 260px;
`

const HiddenInput = styled.input`
  display: none;
`

const Notice = styled.div`
  margin-left: 10px;
  font-family: KBTextB;
  font-size: 12px; 
  color: red;
`

const DefaultImg = styled.div`
  width: 80px;
  height: 120px;
  border: dotted;
  line-height: 120px;
  text-align: center;
`

const BodyBox = styled.div`
  font-family: KBTextB;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  margin: 12px 0 12px 0;
`

const ToggleBox = styled.div`
  display: flex;
  justify-content: end;
`

const VerticalLineBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 20px;
  border-color: #fc0;
  border-left-style: solid;
  border-width: 2px;
`

const VerticalDot = styled.div`
  height: 8px;
  width: 8px;
  position: relative !important;
  background-color: #ffcc00;
  border-radius: 50%;
  display: inline-block;
  justify-content: center;
  left: -25px;
  z-index: 0;
`

const ClearBtn = styled.div`
  height: 8px;
  width: 8px;
  font-size: 16px;
  font-family: KBTextB;
  color: #aab0b8;
  position: relative !important;
  border-radius: 50%;
  display: inline-block;
  justify-content: center;
  left: 285px;
  top: -1px;
  z-index: 0;
`

const BtnBox = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: center;
`

const CancelBtn = styled.button`
  border-radius: 30px;
  background-color: #d9d9d9;
  width: 103.594px;
  height: 39.05px;
  border: none;
  font-family: KBTextM;
  font-size: 16px;
  margin: 0 10px 0 10px;
`

const AddBtn = styled.button`
  border-radius: 30px;
  background-color: #fc0;
  width: 103.594px;
  height: 39.05px;
  border: none;
  font-family: KBTextM;
  font-size: 16px;
  margin: 0 10px 0 10px;
`

const InputBox = styled.input`
  background-color: #f1f1f1;
  border: none;
  border-radius: 15px;
  padding: 0 0 0 10px;
  width: 300px;
  height: 30px;
  font-family: KBTextB;
  font-size: 16px;
`

const CatBtn = styled.input`
  border-radius: 3px;
  font-family: KBTextM;
  font-size: 11px;
  margin-right: 7px;
  padding: 0 10px;
  border: none;
  background-color: ${props => `#${
    (props.num === 1) && 'fdc453' || 
    (props.num === 2) && 'f886a8' ||
    (props.num === 3) && 'fe8d6f' ||
    (props.num === 4) && 'a0dde0' ||
    (props.num === 5) && 'dfdd6c' ||
    (props.num === 6) && '9adbc5'
  }`};
`

const CatPlusBtn = styled.input`
  border: dotted 1px #000;
  border-radius: 3px;
  width: 35.649px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: KBFG Text;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 13px;
  margin-right: 7px;
  padding: 0 10px;
`

const AddImgBox = styled.div`
  margin: 0 8px 0 8px;
  img {
    width: 80px;
    height: 120px;
  }
  label {
    display: inline-block;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const CatBox = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  width: 300px;
`
const MarginLeftBox = styled.div`
  margin-left: ${props => `${props.px}px`};
`

export default PaymentAdd;
