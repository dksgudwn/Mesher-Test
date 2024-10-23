import React, {  } from "react";

interface TokenProps {
    amount: string;
    name: string;
    isFocused: boolean;
    onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setIsFocused: (focused: boolean) => void;
    onModal: () => void;
}

const TokenInput: React.FC<TokenProps> = ({
    amount,
    name,
    isFocused,
    onAmountChange,
    onModal,
    setIsFocused,
}) => {
    return (
        <div className='input-holder'>
            <input
                type="number"
                className="amount-input"
                placeholder="0.0"
                value={amount}
                onChange={onAmountChange}
            />

            <button className='token-button' onClick={onModal}> dsfsddd </button>
        </div>
    );
}

export default TokenInput;