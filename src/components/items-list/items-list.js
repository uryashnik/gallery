import React, { Component } from 'react'
import Item from '../item';
import './items-list.css';

const ItemsList = ({state}) => {

    const {posX, arr} = state;
    console.log(arr);
    return (
        <div className='items-list'>
            <div className='items-list__wrap' >
                <Item arr={arr}/>
            </div>
        </div>
    );
};

export default ItemsList;