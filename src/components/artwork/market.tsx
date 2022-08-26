import React from "react";

export interface Props {
    hiBidPrice: number | undefined;
    loAskPrice: number | undefined;
    
}

export const Market = (props: Props): React.ReactElement => {
    return (
        <div>
            <div>hi bid price: {props.hiBidPrice}</div>
            <div>lo ask price: {props.loAskPrice}</div>
        </div>
    );
}