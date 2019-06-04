import React from 'react'
import Item from '../item';
import './items-list.css';

const ItemsList = ({props}) => {

    return (
        <div className='items-list'>
            <div className='items-list__wrap' >
                <Item props={props} />
            </div>
        </div>
    );
};

export default ItemsList;