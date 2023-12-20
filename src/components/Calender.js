import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '../styles/calendar.css';
import moment from 'moment';
import Record from './Record';
import { getRecordList, createCategory } from '../services/service';
import categoryColors from '../constants/cat';

const dayList = [];

function ReactCalendar({ curledger, recordList, newDateList }) {
  const [dayList, setDayList] = useState([]);
  const [value, onChange] = useState(new Date()); // 초기값은 현재 날짜
  const [checked, setChecked] = useState('전체');
  const [catList, setCatList] = useState([]);
  const [isExpenseOpen, setExpenseOpen] = useState(false);
  const activeBtn = checked == '전체' ? styles.all : styles.one;
  const [recordData, setRecordData] = useState(recordList.map((obj) => obj.tranYmd));
  // const handleChecked = () => {
  //   if (checked == '전체') {
  //     console.log('전체');
  //   } else if (checked == '수입') {
  //     console.log('수입');
  //   } else if (checked == '지출') {
  //     setExpenseOpen(true);
  //     console.log('지출');
  //   }
  // };

  const handleTileContents = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    const occurrences = recordList.filter((val) => val.tranYmd === formattedDate).length;
    const categories = recordList
      .filter((val) => val.tranYmd === formattedDate)
      .map((val) => val.categoryName)
      .slice(0, 2);
    if (occurrences >= 2) {
      return (
        <>
          <div className="dot-box">
            {categories.map((category, i) => {
              return (
                <div key={category + i} className="dot" style={{ backgroundColor: categoryColors[category] }}></div>
              );
            })}
          </div>
        </>
      );
    } else if (occurrences === 1) {
      return (
        <>
          <div className="dot-box">
            <div className="dot" style={{ backgroundColor: categoryColors[categories[0]] }}></div>
          </div>
        </>
      ); // Hide if occurrences are more than 2 and date is selected
    } else {
      return <></>;
    }
  };
  function addContent({ date }) {
    const contents = [];

    recordList.find((val, i) => {
      if (val.tranYmd === moment(date).format('YYYY-MM-DD')) {
        contents.push(
          <>
            <div className="dot-box">
              <div className={`dot cat-${i + 1}`}></div>
            </div>
          </>,
        );
      }
    });

    // console.log('contents: ', moment(date).format('YYYY-MM-DD'), contents);\

    return <div>{contents}</div>;
  }

  function makeCatList() {
    var tempList = [];
    recordList.map((val) => {
      if (val.isExpense == '1') {
        tempList.push(val.categoryName);
      }
    });
    setCatList([...new Set(tempList)]);
  }
  useEffect(() => {
    makeCatList();
  }, []);
  console.log('cc', catList);
  return (
    <div>
      <div className="toggle-container">
        <input
          type="checkbox"
          className={`btn-check`}
          id="btn-check-outlined1"
          onClick={() => {
            setExpenseOpen(false);
            setChecked('전체');
          }}
        ></input>
        <label className={`whole-btn ${checked == '전체' ? 'active1' : ''}`} htmlFor="btn-check-outlined1">
          전체
        </label>
        <div className="divider"></div>
        <input
          type="checkbox"
          className="btn-check btn-check2"
          id="btn-check-outlined2"
          onClick={() => {
            setExpenseOpen(false);
            setChecked('수입');
          }}
        ></input>
        <label className={`income-btn ${checked == '수입' ? 'active2' : ''}`} htmlFor="btn-check-outlined2">
          수입
        </label>
        <input
          type="checkbox"
          className="btn-check btn-check2"
          id="btn-check-outlined3"
          onClick={() => {
            setChecked('지출');
            setExpenseOpen(!isExpenseOpen);
          }}
        ></input>
        <label className={`income-btn ${checked == '지출' ? 'active3' : ''}`} htmlFor="btn-check-outlined3">
          지출
        </label>
      </div>
      {isExpenseOpen && (
        <div>
          <div className="triangle"></div>
          <div className="category-container">
            {catList &&
              catList.map((val, i) => (
                <div key={i}>
                  <div key={i} className={`cat-btn1 cat-${i + 1}`}>
                    {val}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      <div className="calendar-container mt-2">
        <Calendar
          locale="kor"
          onChange={onChange}
          formatDay={(locale, date) => moment(date).format('DD')}
          value={value}
          tileContent={({ date }) => handleTileContents(date)}
          showNeighboringMonth={true}
          next2Label={null}
          prev2Label={null}
        />
        {/* 월별 주별 토글버튼 */}
        {/* <div id="outerContainer">
        <div className="select-left" id="container">
          <div id="item"></div>
          <div className="left">
            <span>월별</span>
          </div>
          <div className="right">
            <span>주별</span>
          </div>
        </div>
      </div> */}
      </div>
      <div className="title-container">
        <div className="record-main-title mt-4 row">
          <div className="col-sm"></div>
          <div className="today col-sm">{moment(value).format('YYYY.MM.DD')}</div>
          <div className="more-record-btn col-sm">
            <span className="plus">+ 내역추가</span>
          </div>
        </div>
      </div>

      <Record value={value} recordList={recordList} newDateList={newDateList} catList={catList} />
    </div>
  );
}

// 월별주별 토글
// window.onload = function () {
//   var dragItem = document.querySelector('#item');
//   var container = document.querySelector('#container');

//   console.log('container', container);
//   var active = false;
//   var currentX;
//   var initialX;
//   var itemClick;
//   var xOffset = 0;

//   function isFirefox() {
//     return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
//   }

//   function dragStart(e) {
//     var xPos = e.pageX - this.getBoundingClientRect().left;

//     if (e.type === 'touchstart') {
//       var xPosMobile = e.touches[0].pageX - this.getBoundingClientRect().left;
//       initialX = xPosMobile;
//     } else {
//       initialX = xPos;
//     }

//     dragItem.style.transition = 'all .2s cubic-bezier(0.04, 0.46, 0.36, 0.99)';

//     if (e.target === dragItem) {
//       active = true;
//     }
//   }

//   function itemDragStart(e) {
//     var xPos = e.pageX - this.getBoundingClientRect().left;

//     itemClick = xPos;
//   }

//   function toggleSwitch() {
//     if (initialX > 100) {
//       currentX = 0;
//     } else {
//       currentX = 200;
//     }
//   }

//   function dragEnd(e) {
//     initialX = currentX;
//     active = false;

//     if (initialX > 100) {
//       currentX = 36;
//       dragItem.style.transition = 'all .2s cubic-bezier(0.04, 0.46, 0.36, 0.99)';
//       container.classList.add('select-right');
//       container.classList.remove('select-left');
//     } else {
//       currentX = 0;
//       dragItem.style.transition = 'all .2s cubic-bezier(0.04, 0.46, 0.36, 0.99)';
//       container.classList.remove('select-right');
//       container.classList.add('select-left');
//     }

//     setTranslate(currentX, dragItem);
//   }

//   function drag(e) {
//     var xPos = e.pageX - this.getBoundingClientRect().left;

//     if (!(xPos > 400 || xPos < 0)) {
//       if (active) {
//         e.preventDefault();

//         if (e.type === 'touchmove') {
//           var xPosMobile = e.touches[0].pageX - this.getBoundingClientRect().left;
//           currentX = xPosMobile - initialX;
//           if (initialX > 200) {
//             currentX = xPosMobile - itemClick;
//           }
//           if (currentX > 200) {
//             currentX = 200;
//             active = false;
//             container.classList.add('select-right');
//             container.classList.remove('select-left');
//           } else if (currentX < 0) {
//             currentX = 0;
//             active = false;
//             container.classList.remove('select-right');
//             container.classList.add('select-left');
//           }
//         } else {
//           currentX = xPos - initialX;
//           if (initialX > 200) {
//             currentX = xPos - itemClick;
//           }
//           if (currentX > 200) {
//             currentX = 200;
//             active = false;
//             container.classList.add('select-right');
//             container.classList.remove('select-left');
//           } else if (currentX < 0) {
//             currentX = 0;
//             active = false;
//             container.classList.remove('select-right');
//             container.classList.add('select-left');
//           }
//         }

//         dragItem.style.transition = 'all .05s cubic-bezier(0.04, 0.46, 0.36, 0.99)';

//         xOffset = currentX;

//         setTranslate(currentX, dragItem);
//       }
//     } else {
//       active = false;

//       if (initialX > 200) {
//         dragItem.style.transform = 'translate3d(200px, 0px, 0)';
//       } else {
//         dragItem.style.transform = 'translate3d(0, 0px, 0)';
//       }
//     }
//   }

//   function setTranslate(xPos, el) {
//     el.style.transform = 'translate3d(' + xPos + 'px, 0px, 0)';
//   }
//   // window.onload = function () {
//   if (isFirefox()) {
//     container.addEventListener('mouseup', dragEnd, false);
//     container.addEventListener('click', toggleSwitch, false);
//   } else {
//     console.log('container 생성');
//     // if (container) {
//     // console.log('container 생성2');
//     // container.addEventListener('touchstart', dragStart, false);
//     // container.addEventListener('touchend', dragEnd, false);
//     // container.addEventListener('touchmove', drag, false);

//     // container.addEventListener('mousedown', dragStart, false);
//     // dragItem.addEventListener('mousedown', itemDragStart, false);

//     // container.addEventListener('mousemove', drag, false);

//     container.addEventListener('mouseup', dragEnd, false);
//     container.addEventListener('click', toggleSwitch, false);
//   }
//   // }
//   // };

//   // Rest of your code that uses addEventListener goes here
// };

// var dragItem = document.querySelector('#item');
// var container = document.querySelector('#container');

export default ReactCalendar;
