import React, { useState } from 'react';
import styled from '@emotion/styled';

function InputModal({ cancelFunc, acceptFunc, title, cancelMsg, acceptMsg }) {
  const [inputCat, setInputCat] = useState('');

  return (
    <CheckModalDiv>
      <ModalArea>
        <TitleBox>{title}</TitleBox>
        <ContentBox>
          <InputBox className='inputBox' type="text" value={inputCat} onChange={(e) => { setInputCat(e.target.value) }} onKeyUp={(e) => {(e.key==='Enter') && acceptFunc(inputCat)}} />
        </ContentBox>
        <ButtonBox>
          <CancelBtn onClick={cancelFunc}>{cancelMsg}</CancelBtn>
          <AcceptBtn onClick={() => acceptFunc(inputCat)}>{acceptMsg}</AcceptBtn>
        </ButtonBox>
      </ModalArea>
    </CheckModalDiv>
  );
}

const AcceptBtn = styled.div`
  background-color: #ffcc00;
  width: 150px;
  height: 50px;
  line-height: 50px;
  font-family: KBTextB;
  font-size: 20px;
  text-align: center;
`;
const CancelBtn = styled.div`
  background-color: #d9d9d9;
  width: 150px;
  height: 50px;
  line-height: 50px;
  font-family: KBTextB;
  font-size: 20px;
  text-align: center;
`;
const TitleBox = styled.div`
  font-family: KBTextB;
  font-size: 18px;
  height: 60px;
  justify-content: center;
  align-items: end;
  padding: 30px 30px 20px 20px;
`;
const ContentBox = styled.div`
  font-family: KBTextL;
  font-size: 12px;
  height: 70px;
  justify-content: center;
  align-items: end;
  padding: 20px 20px 10px 20px;
`;

const InputBox = styled.input`
  background-color: #f1f1f1;
  border: none;
  border-radius: 15px;
  padding: 0 0 0 10px;
  width: 260px;
  height: 30px;
  font-family: KBTextB;
  font-size: 16px;
`

const ButtonBox = styled.div`
  display: flex;
`;

const CheckModalDiv = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;
const ModalArea = styled.div`
  background: #fff;
  height: 180px;
  width: 300px;
  margin: 100px auto;
`;

export default InputModal;
