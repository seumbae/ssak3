import React, { useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css';
import moment from 'moment';
import Record from './Record';
import categoryColors from '../constants/cat';
import PaymentAdd from './PaymentAdd';
import CheckModal from './CheckModal';

function ReactCalendar({
  curledger,
  recordList,
  setReceiptUrl,
  newDateList,
  ledgerId,
  catList,
  setCatList,
  setRecordList,
  receiptUrl,
}) {
  const [value, setValue] = useState(new Date()); // 초기값은 현재 날짜
  const [checked, setChecked] = useState('전체');
  const [editState, setEditState] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [curDate, setCurDate] = useState(new Date());
  //TODO: 카테고리 선택할 수 있게 하고 handleTileContents에서 해당 카테고리만 보여주기 ㅇㅇ

  const handleOnChange = (e) => {
    setCurDate(e);
    if (editState) {
      setIsCancelModalOpen(true);
    } else {
      setValue(e);
    }
  };

  const handleTileContents = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    const occurrences = recordList.filter((val) => val.tranYmd === formattedDate).length;
    let categories;
    if (checked === '전체') {
      categories = recordList
        .filter((val) => val.tranYmd === formattedDate)
        .map((val) => val.categoryName)
        .slice(0, 2);
    } else if (checked === '수입') {
      categories = recordList
        .filter((val) => val.isExpense === '0')
        .filter((val) => val.tranYmd === formattedDate)
        .map((val) => val.categoryName)
        .slice(0, 2);
    } else if (checked === '지출') {
      categories = recordList
        .filter((val) => val.isExpense === '1')
        .filter((val) => val.tranYmd === formattedDate)
        .map((val) => val.categoryName)
        .slice(0, 2);
    }

    if (occurrences >= 2) {
      return (
        <>
          <div className="dot-box">
            {categories.map((category, i) => {
              return (
                <div
                  key={category + i}
                  className="dot"
                  style={{ backgroundColor: categoryColors[category] || '#808080' }}
                ></div>
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
      );
    } else {
      return <></>;
    }
  };

  return (
    <div>
      <div className="toggle-container">
        <input
          type="checkbox"
          className={`btn-check`}
          id="btn-check-outlined1"
          onClick={() => {
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
          }}
        ></input>
        <label className={`income-btn ${checked == '지출' ? 'active3' : ''}`} htmlFor="btn-check-outlined3">
          지출
        </label>
      </div>

      <div>
        <div className="category-container">
          {checked === '전체' &&
            catList.map((val, i) => (
              <div
                key={i}
                className="cat-btn1"
                style={{ backgroundColor: categoryColors[val.customCategoryName] || '#808080' }}
              >
                {val.customCategoryName}
              </div>
            ))}
          {checked === '수입' &&
            [...new Set(recordList.filter((list) => list.isExpense === '0').map((list) => list.categoryName))].map(
              (val, i) => (
                <div key={val + i} className={`cat-btn1`} style={{ backgroundColor: categoryColors[val] || '#808080' }}>
                  {val}
                </div>
              ),
            )}
          {checked === '지출' &&
            [...new Set(recordList.filter((list) => list.isExpense === '1').map((list) => list.categoryName))].map(
              (val, i) => (
                <div key={i} className={`cat-btn1`} style={{ backgroundColor: categoryColors[val] || '#808080' }}>
                  {val}
                </div>
              ),
            )}
        </div>
      </div>

      <div className="calendar-container mt-2">
        <Calendar
          locale="kor"
          onChange={handleOnChange}
          formatDay={(locale, date) => moment(date).format('DD')}
          value={value}
          tileContent={({ date }) => handleTileContents(date)}
          showNeighboringMonth={true}
          next2Label={null}
          prev2Label={null}
        />
      </div>
      <div className="title-container">
        <div className="record-main-title mt-4 row">
          <div className="col-sm"></div>
          <div className="today col-sm">{moment(value).format('YYYY.MM.DD')}</div>
          <div className="more-record-btn col-sm"></div>
        </div>
      </div>
      <PaymentAdd date={moment(value).format('YYYY-MM-DD')} categoryList={catList} ledgerId={curledger.ledgerId} setCatList={setCatList} />
      <Record
        value={value}
        recordList={recordList}
        newDateList={newDateList}
        catList={catList}
        ledgerId={ledgerId}
        curledger={curledger}
        setCatList={setCatList}
        setRecordList={setRecordList}
        setReceiptUrl={setReceiptUrl}
        receiptUrl={receiptUrl}
        setEditState={setEditState}
        editState={editState}
      />
      {isCancelModalOpen && (
        <CheckModal
          cancelFunc={() => {
            setIsCancelModalOpen(false);
          }}
          acceptFunc={() => {
            setIsCancelModalOpen(false);
            setEditState(false);
            setValue(curDate);
          }}
          title="경고"
          content="수정 중 이동하시면 모든 수정 내역이 취소됩니다."
          cancelMsg="취소"
          acceptMsg="확인"
        />
      )}
    </div>
  );
}

export default ReactCalendar;
