import React from "react";

import UserBar from "../components/UserBar";
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
            <div>    .    </div>
            <UserBar userName='슴배' userAvatar={iconAvatar} />
            <div>    .    </div>
            <BudgetBar use={use} budget={budget} />
            <div>    .    </div>
            <PredictMotive saveMoney={saveMoney} />
            <div>    .    </div>
            <ServiceList />
            <div>    .    </div>
        </div>
    )
}

export default Test;