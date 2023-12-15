import React from "react";

import UserBar from "../components/UserBar";
import FNLGBar from "../components/FNLGBar"
import BudgetBar from "../components/BudgetBar";
import PredictMotive from "../components/PredictMotive"
import ServiceList from "../components/ServiceList"

import iconAvatar from '../assets/images/iconAvatar.png'

function Test() {
    const use = 500000;
    const budget = 1000000;
    const saveMoney = 3000;
    return (
        <div>
            <div className="emptyBox"></div>
            <UserBar userName='슴배' userAvatar={iconAvatar} />
            <div className="emptyBox"></div>
            <FNLGBar list={["전체", "식비", "패션/쇼핑", "카페/간식", "교통/자동차", "취미/여가"]} />
            <div className="emptyBox"></div>
            <BudgetBar use={use} budget={budget} />
            <div className="emptyBox"></div>
            <PredictMotive saveMoney={saveMoney} />
            <ServiceList />
        </div>
    )
}

export default Test;