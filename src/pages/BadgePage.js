import React, { useState, useEffect } from 'react';
import { getBadgeList, editBadgeList } from '../services/service';
import tree from '../assets/images/tree.png';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [badgeList, setBadgeList] = useState([]);
  const [badgeStatus1, setBadgeStatus1] = useState('0');
  const [badgeStatus2, setBadgeStatus2] = useState('0');
  const [badgeStatus3, setBadgeStatus3] = useState('0');
  const [badgeStatus4, setBadgeStatus4] = useState('0');
  const [badgeStatus5, setBadgeStatus5] = useState('0');
  const [badgeStatus6, setBadgeStatus6] = useState('0');
  const [badgeStatus7, setBadgeStatus7] = useState('0');
  const [badgeStatus8, setBadgeStatus8] = useState('0');

  const badgeImg1 = document.querySelector('.location1');
  const badgeImg2 = document.querySelector('.location2');
  const badgeImg3 = document.querySelector('.location3');
  const badgeImg4 = document.querySelector('.location4');
  const badgeImg5 = document.querySelector('.location5');
  const badgeImg6 = document.querySelector('.location6');
  const badgeImg7 = document.querySelector('.location7');
  const badgeImg8 = document.querySelector('.location8');

  function handleBadgeBtn1() {
    const badgeInfo = badgeList.find((element) => element.originBadgeId === 1);
    if (badgeInfo.isGained === '1') {
      if (getComputedStyle(badgeImg1).visibility == 'hidden') {
        badgeImg1.style.visibility = 'visible';
        setBadgeStatus1('1');
        document.querySelector(`.button1`).style.border = '1px solid #adadad';
        document.querySelector(`.button1`).style.borderRadius = '10px';
        document.querySelector(`.button1`).style.padding = '2px';
        document.querySelector(`.button1`).style.boxShadow = '0px 3px 6px #adadad';
      } else if (getComputedStyle(badgeImg1).visibility == 'visible') {
        badgeImg1.style.visibility = 'hidden';
        setBadgeStatus1('0');
        document.querySelector(`.button1`).style.border = 'none';
        document.querySelector(`.button1`).style.boxShadow = 'none';
      }
    }
  }
  function handleBadgeBtn2() {
    const badgeInfo = badgeList.find((element) => element.originBadgeId === 2);
    if (badgeInfo.isGained === '1') {
      if (getComputedStyle(badgeImg2).visibility == 'hidden') {
        badgeImg2.style.visibility = 'visible';
        setBadgeStatus2('1');
        document.querySelector(`.button2`).style.border = '1px solid #adadad';
        document.querySelector(`.button2`).style.borderRadius = '10px';
        document.querySelector(`.button2`).style.padding = '2px';
        document.querySelector(`.button2`).style.boxShadow = '0px 3px 6px #adadad';
      } else if (getComputedStyle(badgeImg2).visibility == 'visible') {
        badgeImg2.style.visibility = 'hidden';
        setBadgeStatus2('0');
        document.querySelector(`.button2`).style.border = 'none';
        document.querySelector(`.button2`).style.boxShadow = 'none';
      }
    }
  }
  function handleBadgeBtn3() {
    const badgeInfo = badgeList.find((element) => element.originBadgeId === 3);
    if (badgeInfo.isGained === '1') {
      if (getComputedStyle(badgeImg3).visibility == 'hidden') {
        badgeImg3.style.visibility = 'visible';
        setBadgeStatus3('1');
        document.querySelector(`.button3`).style.border = '1px solid #adadad';
        document.querySelector(`.button3`).style.borderRadius = '10px';
        document.querySelector(`.button3`).style.padding = '2px';
        document.querySelector(`.button3`).style.boxShadow = '0px 3px 6px #adadad';
      } else if (getComputedStyle(badgeImg3).visibility == 'visible') {
        badgeImg3.style.visibility = 'hidden';
        setBadgeStatus3('0');
        document.querySelector(`.button3`).style.border = 'none';
        document.querySelector(`.button3`).style.boxShadow = 'none';
      }
    }
  }
  function handleBadgeBtn4() {
    const badgeInfo = badgeList.find((element) => element.originBadgeId === 4);
    if (badgeInfo.isGained === '1') {
      if (getComputedStyle(badgeImg4).visibility == 'hidden') {
        badgeImg4.style.visibility = 'visible';
        setBadgeStatus4('1');
        document.querySelector(`.button4`).style.border = '1px solid #adadad';
        document.querySelector(`.button4`).style.borderRadius = '10px';
        document.querySelector(`.button4`).style.padding = '2px';
        document.querySelector(`.button4`).style.boxShadow = '0px 3px 6px #adadad';
      } else if (getComputedStyle(badgeImg4).visibility == 'visible') {
        badgeImg4.style.visibility = 'hidden';
        setBadgeStatus4('0');
        document.querySelector(`.button4`).style.border = 'none';
        document.querySelector(`.button4`).style.boxShadow = 'none';
      }
    }
  }
  function handleBadgeBtn5() {
    const badgeInfo = badgeList.find((element) => element.originBadgeId === 5);

    if (badgeInfo.isGained === '1') {
      if (getComputedStyle(badgeImg5).visibility == 'hidden') {
        badgeImg5.style.visibility = 'visible';
        setBadgeStatus5('1');
        document.querySelector(`.button5`).style.border = '1px solid #adadad';
        document.querySelector(`.button5`).style.borderRadius = '10px';
        document.querySelector(`.button5`).style.padding = '2px';
        document.querySelector(`.button5`).style.boxShadow = '0px 3px 6px #adadad';
      } else if (getComputedStyle(badgeImg5).visibility == 'visible') {
        badgeImg5.style.visibility = 'hidden';
        setBadgeStatus5('0');
        document.querySelector(`.button5`).style.border = 'none';
        document.querySelector(`.button5`).style.boxShadow = 'none';
      }
    }
  }
  function handleBadgeBtn6() {
    const badgeInfo = badgeList.find((element) => element.originBadgeId === 6);
    if (badgeInfo.isGained === '1') {
      if (getComputedStyle(badgeImg6).visibility == 'hidden') {
        badgeImg6.style.visibility = 'visible';
        setBadgeStatus6('1');
        document.querySelector(`.button6`).style.border = '1px solid #adadad';
        document.querySelector(`.button6`).style.borderRadius = '10px';
        document.querySelector(`.button6`).style.padding = '2px';
        document.querySelector(`.button6`).style.boxShadow = '0px 3px 6px #adadad';
      } else if (getComputedStyle(badgeImg6).visibility == 'visible') {
        badgeImg6.style.visibility = 'hidden';
        setBadgeStatus6('0');
        document.querySelector(`.button6`).style.border = 'none';
        document.querySelector(`.button6`).style.boxShadow = 'none';
      }
    }
  }
  function handleBadgeBtn7() {
    const badgeInfo = badgeList.find((element) => element.originBadgeId === 7);
    if (badgeInfo.isGained === '1') {
      if (getComputedStyle(badgeImg7).visibility == 'hidden') {
        badgeImg7.style.visibility = 'visible';
        setBadgeStatus7('1');
        document.querySelector(`.button7`).style.border = '1px solid #adadad';
        document.querySelector(`.button7`).style.borderRadius = '10px';
        document.querySelector(`.button7`).style.padding = '2px';
        document.querySelector(`.button7`).style.boxShadow = '0px 3px 6px #adadad';
      } else if (getComputedStyle(badgeImg7).visibility == 'visible') {
        badgeImg7.style.visibility = 'hidden';
        setBadgeStatus7('0');
        document.querySelector(`.button7`).style.border = 'none';
        document.querySelector(`.button7`).style.boxShadow = 'none';
      }
    }
  }
  function handleBadgeBtn8() {
    const badgeInfo = badgeList.find((element) => element.originBadgeId === 8);
    if (badgeInfo.isGained === '1') {
      if (getComputedStyle(badgeImg8).visibility == 'hidden') {
        badgeImg8.style.visibility = 'visible';
        setBadgeStatus8('1');
        document.querySelector(`.button8`).style.border = '1px solid #adadad';
        document.querySelector(`.button8`).style.borderRadius = '10px';
        document.querySelector(`.button8`).style.padding = '2px';
        document.querySelector(`.button8`).style.boxShadow = '0px 3px 6px #adadad';
      } else if (getComputedStyle(badgeImg8).visibility == 'visible') {
        badgeImg8.style.visibility = 'hidden';
        setBadgeStatus8('0');
        document.querySelector(`.button8`).style.border = 'none';
        document.querySelector(`.button8`).style.boxShadow = 'none';
      }
    }
  }

  function handleCompleteBtn() {
    editBadgeList({ badgeId: '1', isFixed: badgeStatus1 });
    editBadgeList({ badgeId: '2', isFixed: badgeStatus2 });
    editBadgeList({ badgeId: '3', isFixed: badgeStatus3 });
    editBadgeList({ badgeId: '4', isFixed: badgeStatus4 });
    editBadgeList({ badgeId: '5', isFixed: badgeStatus5 });
    editBadgeList({ badgeId: '6', isFixed: badgeStatus6 });
    editBadgeList({ badgeId: '7', isFixed: badgeStatus7 });
    editBadgeList({ badgeId: '8', isFixed: badgeStatus8 });
    navigate('/home');
  }
  useEffect(() => {
    getBadgeList()
      .then((res) => {
        setBadgeList(res.data);

        res.data.map((badge, i) => {
          eval(`setBadgeStatus${i + 1}`)(badge.isFixed);
          if (badge.isGained === '1') {
            document.querySelector(`.badgeStatus${i + 1}`).style.opacity = 1;
            document.querySelector(`.badgeStatus${i + 1}`).style.cursor = 'pointer';
            document.querySelector(`.button${i + 1}`).style.pointerEvents = 'auto';
          }
          if (badge.isFixed === '1') {
            document.querySelector(`.location${i + 1}`).style.visibility = 'visible';

            document.querySelector(`.button${i + 1}`).style.border = '1px solid #adadad';
            document.querySelector(`.button${i + 1}`).style.borderRadius = '10px';
            document.querySelector(`.button${i + 1}`).style.padding = '2px';
            document.querySelector(`.button${i + 1}`).style.boxShadow = '0px 3px 6px #adadad';
          }
        });
      })

      .catch((err) => {
        alert('서버와의 연결이 원활하지 않습니다.', err);
      });
  }, []);

  return (
    <>
      <div className="badge-container">
        <img className="treeImg mt-3" src={tree} alt="tree" />
        {/* <div className="badge1"> */}
        <img className="location1" src={badge1} alt="badge1" />
        {/* </div> */}
        {/* <div className="badge2"> */}
        <img className=" location2" src={badge2} alt="badge2" />
        {/* </div> */}
        {/* <div className="badge3"> */}
        <img className="location3" src={badge8} alt="badge8" />
        {/* </div> */}
        {/* <div className="badge4"> */}
        <img className="location4" src={badge4} alt="badge4" />
        {/* </div> */}
        {/* <div className="badge5"> */}
        <img className="location5" src={badge5} alt="badge5" />
        {/* </div> */}
        {/* <div className="badge6"> */}
        <img className="location6" src={badge6} alt="badge6" />
        {/* </div> */}
        {/* <div className="badge7"> */}
        <img className="location7" src={badge7} alt="badge7" />
        {/* </div>
        <div className="badge8"> */}
        <img className="location8" src={badge3} alt="badge3" />
        {/* </div> */}
        <div className="badge-location"></div>
      </div>
      <div className="badge-save-container">
        <h2>배지 보관함</h2>
        <h4>획득한 배지를 클릭하여 트리를 꾸며보세요!</h4>
        <div className="badge-wrapper">
          <div className="badge-common badge1">
            <button type="button" className="badge-button button1" onClick={handleBadgeBtn1}>
              <img className="badgeStatus1" src={badge1} alt="badge1" />
            </button>
            <p>최초 가계부 생성</p>
          </div>
          <div className="badge-common badge2">
            <button type="button" className="badge-button button2" onClick={handleBadgeBtn2}>
              <img className="badgeStatus2" src={badge2} alt="badge2" />
            </button>
            <p>최초 가계부내역&nbsp; 추가</p>
          </div>
          <div className="badge-common badge3">
            <button type="button" className="badge-button button3" onClick={handleBadgeBtn3}>
              <img className="badgeStatus3" src={badge8} alt="badge8" />
            </button>
            <p>일주일 연속 출석</p>
          </div>
          <div className="badge-common badge4">
            <button type="button" className="badge-button button4" onClick={handleBadgeBtn4}>
              <img className="badgeStatus4" src={badge4} alt="badge4" />
            </button>
            <p>한 달 연속 출석</p>
          </div>
          <div className="badge-common badge5">
            <button type="button" className="badge-button button5" onClick={handleBadgeBtn5}>
              <img className="badgeStatus5" src={badge5} alt="badge5" />
            </button>
            <p>최초 목표 달성</p>
          </div>
          <div className="badge-common badge6">
            <button type="button" className="badge-button button6" onClick={handleBadgeBtn6}>
              <img className="badgeStatus6" src={badge6} alt="badge6" />
            </button>
            <p>두번째 가계부 생성</p>
          </div>
          <div className="badge-common badge7">
            <button type="button" className="badge-button button7" onClick={handleBadgeBtn7}>
              <img className="badgeStatus7" src={badge7} alt="badge7" />
            </button>
            <p>3명의 친구 초대</p>
          </div>
          <div className="badge-common badge8">
            <button type="button" className="badge-button button8" onClick={handleBadgeBtn8}>
              <img className="badgeStatus8" src={badge3} alt="badge3" />
            </button>
            <p>푸시 알림 동의</p>
          </div>
        </div>
      </div>
      <button className="complete-btn" onClick={handleCompleteBtn}>
        완료
      </button>
    </>
  );
}

export default BadgePage;
