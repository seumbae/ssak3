import React, { useEffect, useState } from 'react';
import ReactCalendar from '../components/Calender';
import UserBar from '../components/UserBar';
import FNLGBar from '../components/FNLGBar';
import BudgetBar from '../components/BudgetBar';
import Banners from '../components/Banners';
import ServiceList from '../components/ServiceList';
import iconAvatar from '../assets/images/iconAvatar.webp';
import { getCategories, getMyList, getRecordList } from '../services/service';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import PushAlarm from '../components/PushAlarm';

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [ledgers, setLedgers] = useState([]);
  const [curledger, setCurledger] = useState({});
  const [FNLG, setFNLG] = useState('');
  const [recordList, setRecordList] = useState([]);
  const [newDateList, setNewDateList] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const [catList, setCatList] = useState([]);
  const [isPushAlarm, setIsPushAlarm] = useState(false);

  useEffect(() => {
    getMyList({ userId: localStorage.getItem('userId') })
      .then((res) => {
        setLedgers(res.data);
        setCurledger(res.data[0]);
        setFNLG(res.data[0].theme.themeName);

        getRecordList({ ledgerId: res.data[0].ledgerId }).then((res) => {
          setRecordList(res.data.recordList);
          setNewDateList(res.data.recordList.map((val) => val.tranYmd));
          setNewDateList(res.data.recordList.map((val) => val.tranYmd));
        });
        getCategories(res.data[0].ledgerId).then((res) => {
          setCatList(res.data.categoryList);
        });
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        alert('서버와의 연결이 원활하지 않습니다.');
        setLoading(false);
        navigate('/');
      });
    // setTimeout(() => setIsPush(false), 10000)
    const pushOccurred = localStorage.getItem('isPushOccurred');

    if (!pushOccurred) {
      const timeout = setTimeout(() => {
        setIsPushAlarm(true);
        localStorage.setItem('isPushOccurred', true);
      }, 7000);
      return () =>clearTimeout(timeout);
    }
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="paddingBox">
          {isPushAlarm && (
            <PushAlarm title="수고했어 오늘도~♫" content="오늘 하루 지출 내역을 가계부에 기록해보세요." />
          )}
          <div className="emptyBox"></div>
          <UserBar userName={curledger.user.userName} userAvatar={iconAvatar} />
          <div className="emptyBox"></div>
          <FNLGBar
            FNLGList={ledgers.map((ledger) => ledger.theme.themeName)}
            getFNLG={(goal) => setFNLG(goal)}
            defaultGoal={FNLG}
            setCurledger={setCurledger}
            ledgers={ledgers}
            setRecordList={setRecordList}
            setNewDateList={setNewDateList}
          />
          <div className="emptyBox"></div>
          <BudgetBar use={curledger.monthExpense} budget={curledger.monthBudget} curledger={curledger} />
          <ReactCalendar
            curledger={curledger}
            recordList={recordList}
            newDateList={newDateList}
            curDate={curDate}
            setCurDate={setCurDate}
            catList={catList}
            setRecordList={setRecordList}
            setCatList={setCatList}
          />
          <div className="emptyBox"></div>
          <Banners />
          <ServiceList />
          <div className="emptyBox"></div>
        </div>
      )}
    </>
  );
}

export default Home;
