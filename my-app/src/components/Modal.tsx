import React, { } from "react";

interface ModalProps {
    value: string;
    onValueChange: (value: string) => void;
    onModal: () => void;
}


const Modal: React.FC<ModalProps> = ({
    value,
    onValueChange,
    onModal
}) => {
    return (
        <div className='modal-content'>
            <div className='modal-header'>
                <h6>토큰 선택</h6>
                <button className='modal-header button' onClick={onModal}>X</button>
            </div>
            <input
            type="text"
            className="modal-header input"
            placeholder="이름 검색 또는 주소 붙여 넣기"
            value={value}
            onChange={ (e) =>onValueChange(e.target.value)}

            />

        </div>
    );
}

export default Modal;