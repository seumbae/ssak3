import React, { useEffect, useState } from 'react';
import ReactCalendar from '../components/Calendar';
import UserBar from '../components/UserBar';
import FNLGBar from '../components/FNLGBar';
import BudgetBar from '../components/BudgetBar';
import PredictMotive from '../components/PredictMotive';
import ServiceList from '../components/ServiceList';
import iconAvatar from '../assets/images/iconAvatar.png';
import { getMyList, getUsers } from '../services/service';
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

  useEffect(() => {
    getMyList({ userId: localStorage.getItem('userId') })
      .then((res) => {
        setLedgers(res.data);
        setCurledger(res.data[0]);
        setFNLG(res.data[0].theme.themeName);
        console.log(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert('서버와의 연결이 원활하지 않습니다.');
        setLoading(false);
        navigate('/');
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
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
      />
      <div className="emptyBox"></div>
      <BudgetBar use={curledger.monthExpense} budget={curledger.monthBudget} curledger={curledger}/>
      <div className="emptyBox"></div>
      <ReactCalendar curledger={curledger}/>
      <div className="emptyBox"></div>
      <PredictMotive saveMoney={saveMoney} />
      <ServiceList />
    </div>
  );
}

export default Home;
