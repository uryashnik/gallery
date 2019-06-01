import React, { Component } from 'react';
import './item.css';

const Item = ({ data }) => {
    const items = data.map((item) => {
        return (
            <div className='item' key={item.id}>
                <img src={item.thumbnailUrl} />
                {item.id}
            </div>
        )
    })
    return (
        <div>
            {items}
        </div>

        // <div className='item'></div>
    );
};

export default Item;

