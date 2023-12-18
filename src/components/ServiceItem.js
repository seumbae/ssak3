import React from 'react';
import styled from "@emotion/styled";


function ServiceItem({title, desTop, desBottom, image}) {
  return (
    <ServiceItemDiv className='ServiceItem' onClick={console.log()} onKeyDown={(e) => console.log(e.key)} role='presentation'>
      <DescriptionBox>
        <p>{desTop}<br />
        {desBottom}</p>
      </DescriptionBox>
      <BottomBox>
        <div>
          {title}
        </div>
        <ImgBox>
          <img src={image} alt="이미지" />
        </ImgBox>
      </BottomBox>
    </ServiceItemDiv>
  );
}

const ServiceItemDiv = styled.div`
  width: 175px;
  height: 100px;
  background-color: #d9d9d9;
  border-radius: 15px;
  border-width: 0;
`

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
`

const BottomBox = styled.div`
  height: 65px;
  display: flex;
  justify-content: space-between;
  div {
    padding-left: 10px;
    font-family: KBTitleM;
    font-size: 24px;
  }
`

const ImgBox = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 10px 10px 0;
`


export default ServiceItem;
