import React from "react";

function Debug({displayValue, valueWaitingForAnOperation, operator, operationPending}) {

    return (
        <div className="Debug">
            <div>displayValue:{` ${displayValue}`}</div>
            <div>valueWaitingForAnOperation:{` ${valueWaitingForAnOperation}`}</div>
            <div>operator:{` ${operator}`}</div>
            <div>operationPending:{` ${operationPending}`}</div>
        </div>
    );

}

export default Debug;
