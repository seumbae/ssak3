import React from 'react';
import '../styles//UserBar.css'
import iconAlarmBell from '../assets/iconAlarmBell.png'
import iconSettings from '../assets/iconSettings.png'

function UserBar(Props) {
  return (
    <div className='UserBar'>
      <div className='greetingContainer'>
        <img className='avatar' src={Props.userAvatar} alt="이미지" />
        <p className='greetingText'>{Props.userName}님, 안녕하세요</p>
      </div>
      <div className='imgContainer'>
        <img className='alarmBell' src={iconAlarmBell} alt="이미지" />
        <img className='settings' src={iconSettings} alt="이미지" />
      </div>
    </div>
  );
}

export default UserBar;
