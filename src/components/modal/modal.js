import React from 'react';
import './modal.css';

const Modal = ({arr, id}) => {
const display = "modal";


    
    return(
        arr[id] ? 
        <div className={display} >
            <button className="modal__close-button" onClick={() => {console.log("Закрыть")}}>Закрыть</button>
            <div> 
                <img src={arr[id].url} />
            </div>
            <div>Modal</div>
        </div> : null
    );

};
export default Modal;
