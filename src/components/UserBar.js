import React from 'react';
import styled from "@emotion/styled";
import iconAlarmBell from '../assets/images/iconAlarmBell.webp'
import iconSettings from '../assets/images/iconSettings.webp'

function UserBar({userName, userAvatar}) {
  return (
    <UserBarDiv className='UserBar'>
      <Container>
        <IconAvatar src={userAvatar} alt="이미지" />
        <p className='greetingText'>{userName}님, 안녕하세요</p>
      </Container>
      <Container>
        <img src={iconAlarmBell} alt="이미지" />
        <img src={iconSettings} alt="이미지" />
      </Container>
    </UserBarDiv>
  );
}

const UserBarDiv = styled.div`
  width: 360px;
  height: 40px;
  background-color: #f1f1f1;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  p {
    font-family: KBTitleB;
    margin: 0;
  }
  img {
    margin: 0 10px 0 5px;
  }
`

const IconAvatar = styled.img`
  margin: 0 10px;
  width: 28px;
  height: 28px;
`;

export default UserBar;
