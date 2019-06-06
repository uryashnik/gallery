import React from 'react'
import Item from '../item';
import './items-list.css';

const ItemsList = ({ onChangeSlider, posX, tempArr}) => {


    // console.log()
    // <div className='items' style={{ transform: `translateX(-${25 * posX}%)` }}>
    //     <div className='item' key={posX}>
    //         <img src={arr[0].thumbnailUrl} />
    //         {arr[posX]}
    //     </div>
    // </div>

    return (
        <div className='items-list'>

            <div className='items-list__wrap' onClick={() => onChangeSlider()}>
                12345

            </div>
        </div>
    );
};

export default ItemsList;