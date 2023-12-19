import React from 'react';
import styled from '@emotion/styled';

function CheckModal({ cancelFunc, acceptFunc, title, content, cancelMsg, acceptMsg }) {
  return (
    <CheckModalDiv>
      <ModalArea>
        <TitleBox>{title}</TitleBox>
        <ContentBox>{content}</ContentBox>
        <ButtonBox>
          <CancelMsg onClick={cancelFunc} role="presentation">
            {cancelMsg}
          </CancelMsg>
          <AcceptMsg onClick={acceptFunc}>{acceptMsg}</AcceptMsg>
        </ButtonBox>
      </ModalArea>
    </CheckModalDiv>
  );
}

const AcceptMsg = styled.div`
  background-color: #ffcc00;
  width: 150px;
  height: 50px;
  line-height: 50px;
  font-family: KBTextB;
  font-size: 20px;
  text-align: center;
`;
const CancelMsg = styled.div`
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

export default CheckModal;
