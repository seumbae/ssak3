import React, { useState } from "react";

import UserBar from "../components/UserBar";
import FNLGBar from "../components/FNLGBar"
import BudgetBar from "../components/BudgetBar";
import PredictMotive from "../components/PredictMotive"
import ServiceList from "../components/ServiceList"
import CheckModal from '../components/CheckModal';

import iconAvatar from '../assets/images/iconAvatar.png'

function Test() {
    const use = 500000;
    const budget = 1000000;
    const saveMoney = 3000;
    const [FNLG, setFNLG] = useState('식비');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="paddingBox">
            <button onClick={() => {setIsOpen(true)}}>Open Modal</button>
            <CheckModal isOpen={isOpen} 
            modalClose={() => setIsOpen(false)} 
            title='취소하시겠습니까?' 
            content='취소하시면 모든 수정 내역이 취소됩니다.' 
            cancelMsg='취소' acceptMsg='확인' />
            <div className="emptyBox"></div>
            <UserBar userName='슴배' userAvatar={iconAvatar} />
            <div className="emptyBox"></div>
            <FNLGBar FNLGList={["전체", "식비", "패션/쇼핑", "카페/간식", "교통/자동차", "취미/여가"]} getFNLG={(goal) => setFNLG(goal)} defaultGoal={FNLG} />
            <div className="emptyBox"></div>
            <BudgetBar use={use} budget={budget} />
            <div className="emptyBox"></div>
            <PredictMotive saveMoney={saveMoney} />
            <ServiceList />
        </div>
    )
}

export default Test;