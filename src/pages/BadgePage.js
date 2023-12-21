import React, { useState } from 'react';
import tree from '../assets/images/tree.png';
import badge from '../assets/images/badge.png';
import badge1 from '../assets/images/badge1.png';
import badge2 from '../assets/images/badge2.png';
import badge3 from '../assets/images/badge3.png';
import badge4 from '../assets/images/badge4.png';
import badge5 from '../assets/images/badge5.png';
import badge6 from '../assets/images/badge6.png';
import badge7 from '../assets/images/badge7.png';
import badge8 from '../assets/images/badge8.png';
import '../styles/badge.css';
function BadgePage() {
  const [badgesStatus, setBadgesStatus] = useState({
    badge1: false,
    badge2: false,
    badge3: false,
    badge4: false,
    badge5: false,
    badge6: false,
    badge7: false,
    badge8: false,
  });

  // setBadgesStatus(prev => {
  //   return {...prev, badge2: true}
  // })

  // const rect1 = document.querySelector('.location1').getBoundingClientRect();
  // console.log('rect1', rect1);
  // const rect2 = document.querySelector('.location2').getBoundingClientRect();
  // console.log('rect2', rect2);
  // const rect3 = document.querySelector('.location3').getBoundingClientRect();
  // console.log('rect3', rect3);
  // const rect4 = document.querySelector('.location4').getBoundingClientRect();
  // console.log('rect4', rect4);
  // const rect5 = document.querySelector('.location5').getBoundingClientRect();
  // console.log('rect5', rect5);
  // const rect6 = document.querySelector('.location6').getBoundingClientRect();
  // console.log('rect6', rect6);
  // const rect7 = document.querySelector('.location7').getBoundingClientRect();
  // console.log('rect7', rect7);
  // const rect8 = document.querySelector('.location8').getBoundingClientRect();
  // console.log('rect8', rect8);
  return (
    // <div className="body-container">
    //   <img src={badge} alt="chart" />
    // </div>
    <>
      <div className="badge-container">
        <img className="treeImg mt-3" src={tree} alt="tree" />
        <div className="badge-location">
          <div className="badge1">
            <img className="location1" src={badge1} alt="badge1" />
          </div>
          <div className="badge2">
            <img className=" location2" src={badge2} alt="badge2" />
          </div>
          <div className="badge3">
            <img className="location3" src={badge8} alt="badge8" />
          </div>
          <div className="badge4">
            <img className="location4" src={badge4} alt="badge4" />
          </div>
          <div className="badge5">
            <img className="location5" src={badge5} alt="badge5" />
          </div>
          <div className="badge6">
            <img className="location6" src={badge6} alt="badge6" />
          </div>
          <div className="badge7">
            <img className="location7" src={badge7} alt="badge7" />
          </div>
          <div className="badge8">
            <img className="location8" src={badge3} alt="badge3" />
          </div>
        </div>
      </div>
      <div className="badge-save-container">
        <h2>배지 보관함</h2>
        <h4>획득한 배지를 클릭하여 트리를 꾸며보세요!</h4>
        <div className="badge-wrapper">
          <div className="badge-common badge1">
            <img src={badge1} alt="badge1" />
            <p>최초 가계부 생성</p>
          </div>
          <div className="badge-common badge2">
            <img src={badge2} alt="badge2" />
            <p>최초 가계부내역 &nbsp; 추가</p>
          </div>
          <div className="badge-common badge3">
            <img src={badge8} alt="badge8" />
            <p>7일 연속 출석</p>
          </div>
          <div className="badge-common badge4">
            <img src={badge4} alt="badge4" />
            <p>30일 연속 출석</p>
          </div>
          <div className="badge-common badge5">
            <img src={badge5} alt="badge5" />
            <p>최초 목표 달성</p>
          </div>
          <div className="badge-common badge6">
            {' '}
            <img src={badge6} alt="badge6" />
            <p>다른 사람 가계부 저장</p>
          </div>
          <div className="badge-common badge7">
            <img src={badge7} alt="badge7" />
            <p>2번째 가계부 생성</p>
          </div>
          <div className="badge-common badge8">
            <img src={badge3} alt="badge3" />
            <p>3명 친구 초대</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BadgePage;
