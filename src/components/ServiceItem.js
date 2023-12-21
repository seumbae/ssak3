import React from 'react';
import styled from '@emotion/styled';

function ServiceItem({ title, desTop, desBottom, image, handleCardClick = { handleCardClick } }) {
  return (
    <ServiceItemDiv className="ServiceItem" onClick={handleCardClick} role="presentation">
      <DescriptionBox>
        <p>
          {desTop}
          <br />
          {desBottom}
        </p>
      </DescriptionBox>
      <BottomBox>
        <Title>{title}</Title>
        <ImgBox>
          <img src={image} alt="이미지" />
        </ImgBox>
      </BottomBox>
    </ServiceItemDiv>
  );
}

const Title = styled.button`
color: black;
appearance: none;
border: none;
background: none;
padding-left: 10px;
font-family: KBTitleM;
font-size: 22px;
`

const ServiceItemDiv = styled.div`
  width: 175px;
  height: 100px;
  background-color: #d9d9d9;
  border-radius: 15px;
  border-width: 0;
`;

const DescriptionBox = styled.div`
  height: 35px;
  padding: 10px 0 0 10px;
  font-family: KBTitleL;
  font-size: 12px;
  color: #868686;
  p {
    margin: 0;
    padding: 0;
    line-height: 110%;
  }
`;

const BottomBox = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 10px 10px 0;
`;

export default ServiceItem;
