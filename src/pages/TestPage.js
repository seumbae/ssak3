import React from "react";
import PaymentAdd from "../components/PaymentAdd";

function Test() {

    return (
        <div className="paddingBox">
            <PaymentAdd categoryList={['aa', 'bb', 'cc']} />
        </div>
    )
}

export default Test;