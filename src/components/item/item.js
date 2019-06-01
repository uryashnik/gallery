import React, { Component } from 'react';
import './item.css';

const Item = ({ arr }) => {
    const items = arr.map((item) => {
        return (
            <div className='item' key={item.id}>
                <img src={item.thumbnailUrl} />
                {item.id}
            </div>
        )
    })
    return (
        <div className='items' style={{transform: "translateX(-100%)" }}>
            {items}
        </div>
    );
};

export default Item;

