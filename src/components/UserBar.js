import React from 'react';
import '../styles//UserBar.css'
import iconAvatar from '../assets/iconAvatar.png'
import iconAlarmBell from '../assets/iconAlarmBell.png'
import iconSettings from '../assets/iconSettings.png'

function UserBar() {
  return (
    <div className='UserBar'>
      <div className='greetingContainer'>
        <img className='avatar' src={iconAvatar} alt="버튼 이미지" />
        <p className='greetingText'>슴배님, 안녕하세요</p>
      </div>
      <div className='imgContainer'>
        <img className='alarmBell' src={iconAlarmBell} alt="버튼 이미지" />
        <img className='settings' src={iconSettings} alt="버튼 이미지" />
      </div>
    </div>
  );
}

export default UserBar;
