import React, { useState, useEffect } from 'react';
import { getBadgeList } from '../services/service';
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
    badge1: '0',
    badge2: '0',
    badge3: '0',
    badge4: '0',
    badge5: '0',
    badge6: '0',
    badge7: '0',
    badge8: '0',
  });
  const [badgeList, setBadgeList] = useState([]);
  const badgeImg1 = document.querySelector('.location1');

  const badgeImg2 = document.querySelector('.location2');

  const badgeImg3 = document.querySelector('.location3');

  const badgeImg4 = document.querySelector('.location4');

  const badgeImg5 = document.querySelector('.location5');

  const badgeImg6 = document.querySelector('.location6');

  const badgeImg7 = document.querySelector('.location7');

  const badgeImg8 = document.querySelector('.location8');

  useEffect(() => {
    getBadgeList()
      .then((res) => {
        console.log(res.data);
        setBadgeList(res.data);

        res.data.map((badge, i) => {
          console.log('badge', badge);
          if (badge.isGained === '1') {
            console.log('gained', badge);
            document.querySelector(`.badgeStatus${i + 1}`).style.opacity = 1;
            // return (
            //   <div key={i} className={`badge${i + 1}`}>
            //     <img
            //       style={{ opacity: 1 }}
            //       className={`lcoation${i + 1}`}
            //       src={`badge${i + 1}`}
            //       alt={`badge${i + 1}`}
            //     />
            //   </div>
            // );
          }
        });
      })

      .catch(() => {
        alert('서버와의 연결이 원활하지 않습니다.');
      });
  }, []);
  // setBadgesStatus(prev => {
  //   return {...prev, badge2: true}
  // })

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
          {badgeList.map((val, i) => (
            <>
              <div className={`badge-common badge${val.originBadgeId}`}>
                <img
                  className={`badgeStatus${val.originBadgeId}`}
                  src={badge + `${i + 1}`}
                  alt={`badge${val.originBadgeId}`}
                />
                <p>{val.badgeName}</p>
              </div>
            </>
          ))}
          {/* <div className="badge-common badge2">
            <img className="badgeStatus2" src={badge2} alt="badge2" />
            <p>최초 가계부내역&nbsp; 추가</p>
          </div>
          <div className="badge-common badge3">
            <img className="badgeStatus3" src={badge8} alt="badge8" />
            <p>7일 연속 출석</p>
          </div>
          <div className="badge-common badge4">
            <img className="badgeStatus4" src={badge4} alt="badge4" />
            <p>30일 연속 출석</p>
          </div>
          <div className="badge-common badge5">
            <img className="badgeStatus6" src={badge5} alt="badge5" />
            <p>최초 목표 달성</p>
          </div>
          <div className="badge-common badge6">
            {' '}
            <img className="badgeStatus6" src={badge6} alt="badge6" />
            <p>다른 사람 가계부 저장</p>
          </div>
          <div className="badge-common badge7">
            <img className="badgeStatus7" src={badge7} alt="badge7" />
            <p>2번째 가계부 생성</p>
          </div>
          <div className="badge-common badge8">
            <img className="badgeStatus8" src={badge3} alt="badge3" />
            <p>3명 친구 초대</p>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default BadgePage;
