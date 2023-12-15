import React from "react";
import UserBar from "../components/UserBar";
import ServiceList from "../components/ServiceList"
import PredictMotive from "../components/PredictMotive"
import iconAvatar from '../assets/iconAvatar.png'

function Test() {
    return (
        <div>
            <div>    .    </div>
            <UserBar userName='슴배' userAvatar={iconAvatar} />
            <div>    .    </div>
            <PredictMotive saveMoney='3,000' />
            <div>    .    </div>
            <ServiceList />
            <div>    .    </div>
        </div>
    )
}

export default Test;