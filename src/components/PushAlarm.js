import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

function PushAlarm({title, content}) {
  const now = new Date();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setTimeout(() => {setIsMounted(false)}, 4000)
  }, []);
  return (
    <PushAlarmDiv isMounted={isMounted} onClick={() => {setIsMounted(false)}}>
      <IconBox>
        <ServiceIcon>KB<br/>돈기브업</ServiceIcon>
      </IconBox>
      <ContentBox>
        <TopContent>
          <TitleContent>{title}</TitleContent>
          <TimeContent>{now.getHours()}:{now.getMinutes()}</TimeContent>
        </TopContent>
        <BottomContent>
          {content}
        </BottomContent>
      </ContentBox>
    </PushAlarmDiv>
  );
}
const TitleContent = styled.div`
font-family: KBTitleB;
font-size: 16px;
`
const BottomContent = styled.div`
font-family: KBTextB;
`
const TimeContent = styled.div`
font-family: KBTitleM;
color: #7f7f7f;
`
const TopContent = styled.div`
display: flex;
justify-content: space-between;
`

const PushAlarmDiv = styled.div`
width: 360px;
height: 60px;
border-radius: 15px;
background-color: #ebebeb;
display: flex;
justify-content: center;
align-items: center;

position: fixed;
top: 40px;
left: 15px;

opacity: 0;
transform: translateY(-100%);
transition: opacity 1s ease, transform 1s ease;
${props => `${
  props.isMounted ?
  ("opacity: 1; transform: translateY(0);") :
  ("opacity: 0; transform: translateY(-100%);")
}`};
`
const IconBox = styled.div`
height: 60px;
width: 60px;
display: flex;
justify-content: center;
align-items: center;
`
const ServiceIcon = styled.div`
height: 50px;
width: 50px;
border-radius: 15px;
background-color: #ffcc00;
font-family: KBTitleB;
font-size: 12px;
text-align: center;
padding-top: 5px;
`
const ContentBox = styled.div`
width: 300px;
padding: 7px 15px 5px 5px;
`

export default PushAlarm;
