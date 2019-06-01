import React, { Component } from 'react'
import Item from '../item';
import './items-list.css';

const ItemsList = ({state}) => {

    const {position, data} = state;
    console.log(data);
    return (
        <div className='items-list'>
            <div className='items-list__wrap' style={{marginLeft: `${position}px`}}>
                <Item data={data}/>
            </div>
        </div>
    );
};

export default ItemsList;