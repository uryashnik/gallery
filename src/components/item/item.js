import React, { Component } from 'react';
import './item.css';

const Item = ({ props }) => {
    const { arr, posX } = props;

    return (
        // <div className='items' style={{ transform: `translateX(-${25 * posX}%)` }}>
        //     <div className='item' key={posX}>
        //         {/* <img src={arr[0].thumbnailUrl} /> */}
        //         {arr[posX]}
        //     </div>
        // </div>
        <div>
            {console.log(arr[10].thumbnailUrl)}
        </div>
    );
};

export default Item;

