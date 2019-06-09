import React from 'react';
import './modal.css';

const Modal = ({arr, id}) => {

    
    return(
        arr[id] ? 
        <div className="modal">
            <button className="modal__close-button">Закрыть</button>
            <div>
                <img src={arr[id].url} />
            </div>
            <div>Modal</div>
        </div> : null
    );

};
export default Modal;
