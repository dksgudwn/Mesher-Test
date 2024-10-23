import React, {  } from "react";

interface ButtonProps {
    amountTo: string;
    amountFrom: string;
    swapEvent: () => void;
}


const SwapButton: React.FC<ButtonProps> = ({
    amountTo,
    amountFrom,
    swapEvent,
}) => {
    const isEnable = Boolean(amountTo&&amountFrom);
    return (

        <button
        className={`swap-button ${isEnable ? 'enabled' : ''}`}
        disabled={!isEnable}
        onClick={() => swapEvent()}>
        {isEnable? '스왑': '입력하세요'}
        </button>
        
    );
}

export default SwapButton;