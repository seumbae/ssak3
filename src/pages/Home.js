import React, { useEffect, useState } from 'react';
import ReactCalendar from '../components/Calender';
import UserBar from '../components/UserBar';
import FNLGBar from '../components/FNLGBar';
import BudgetBar from '../components/BudgetBar';
import PredictMotive from '../components/PredictMotive';
import ServiceList from '../components/ServiceList';
import iconAvatar from '../assets/images/iconAvatar.png';
import { getMyList, getRecordList, getUsers } from '../services/service';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

function Home() {
  const budget = 1000000;
  const saveMoney = 3000;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [ledgers, setLedgers] = useState([]);
  const [curledger, setCurledger] = useState({});
  const [FNLG, setFNLG] = useState('');
  const [recordList, setRecordList] = useState([]);
  const [newDateList, setNewDateList] = useState([]);
  const [curDate, setCurDate] = useState(new Date());

  useEffect(() => {
    getMyList({ userId: localStorage.getItem('userId') })
      .then((res) => {
        setLedgers(res.data);
        setCurledger(res.data[0]);
        setFNLG(res.data[0].theme.themeName);

        getRecordList({ ledgerId: res.data[0].ledgerId }).then((res) => {
          // console.log(res)
          setRecordList(res.data.recordList);
          setNewDateList(res.data.recordList.map((val) => val.tranYmd)); 
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
  }, []);
  
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="paddingBox">
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
          <div className="emptyBox"></div>
          <ReactCalendar
            curledger={curledger}
            recordList={recordList}
            newDateList={newDateList}
            curDate={curDate}
            setCurDate={setCurDate}
          />
          <div className="emptyBox"></div>
          <PredictMotive saveMoney={saveMoney} />
          <ServiceList />
        </div>
      )}
    </>
  );
}

export default Home;
