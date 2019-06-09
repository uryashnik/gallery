import React from 'react';
import './modal.css';

const Modal = ({arr, id, modal, isModalChange}) => {
const display = "modal";


    
    return(
        arr[id] ? 
        <div className={display} >
            <button className="modal__close-button" onClick={() => isModalChange()}>Закрыть</button>
            <div> 
                <img src={arr[id].url} />
            </div>
        </div> : null
    );

};
export default Modal;
