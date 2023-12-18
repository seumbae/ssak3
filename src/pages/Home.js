import React, { useState } from 'react';
import ReactCalendar from '../components/Calendar';
import UserBar from '../components/UserBar';
import FNLGBar from '../components/FNLGBar';
import BudgetBar from '../components/BudgetBar';
import PredictMotive from '../components/PredictMotive';
import ServiceList from '../components/ServiceList';
import iconAvatar from '../assets/images/iconAvatar.png';

function Home() {
  const use = 500000;
  const budget = 1000000;
  const saveMoney = 3000;
  const [FNLG, setFNLG] = useState('식비');

  return (
    <div className="paddingBox">
      <div className="emptyBox"></div>
      <UserBar userName="슴배" userAvatar={iconAvatar} />
      <div className="emptyBox"></div>
      <FNLGBar
        FNLGList={['전체', '식비', '패션/쇼핑', '카페/간식', '교통/자동차', '취미/여가']}
        getFNLG={(goal) => setFNLG(goal)}
        defaultGoal={FNLG}
      />
      <div className="emptyBox"></div>
      <BudgetBar use={use} budget={budget} />
      <div className="emptyBox"></div>
      <ReactCalendar />
      <div className="emptyBox"></div>
      <PredictMotive saveMoney={saveMoney} />
      <ServiceList />
    </div>
  );
}

export default Home;
