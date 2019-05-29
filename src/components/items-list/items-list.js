import React, { Component } from 'react'
import Item from '../item';
import './items-list.css';

const ItemsList = ({props}) => {

    const long = 50;
    return (
        <div className='items-list'>
            <div className='items-list__wrap' style={{marginLeft: `-${long}px`}}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    );
};

export default ItemsList;