import React, { useState } from 'react';
import ReactCalendar from '../components/Calendar';
import UserBar from '../components/UserBar';
import FNLGBar from '../components/FNLGBar';
import BudgetBar from '../components/BudgetBar';
import PredictMotive from '../components/PredictMotive';
import ServiceList from '../components/ServiceList';
import iconAvatar from '../assets/images/iconAvatar.png';

import { getUsers } from '../services/service';

function Home() {
  const use = 500000;
  const budget = 1000000;
  const saveMoney = 3000;
  const [FNLG, setFNLG] = useState('식비');

  // try {
  //   getUsers(localStorage.getItem('userId')).then(({data, status}) => {
  //     if (status === 200) {
  //       localStorage.setItem('userId', data.userId);
  //       localStorage.setItem('kbPIN', data.kbPIN);
  //       localStorage.setItem('userName', data.userName);
  //       localStorage.setItem('age', data.age);
  //       localStorage.setItem('income', data.income);
  //     }

  //     if (status === 404) {
  //       throw new Error('서버와의 연결이 원활하지 않습니다.');
  //     }
  //   });
  // } catch (error) {
  //   alert('서버와의 연결이 원활하지 않습니다.');
  // }

  return (
    <div className="paddingBox">
      <div className="emptyBox"></div>
      <UserBar userName={localStorage.getItem('userName')} userAvatar={iconAvatar} />
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
