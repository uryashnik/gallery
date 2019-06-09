import React from "react";
import { ReactComponent as Spinner } from "../spinner/spinner.svg";
import "./items-list.css";
import Modal from '../modal';

const ItemsList = ({ onChangeSlider, posX, tempArr, isLoading, onBtnRightClick,
                     onBtnLeftClick, onSelectImgId, imgId, modal, isModalChange
                    }) => { 
  const imagesList = tempArr.map((item, id) => {
    return (
      <div className="item" key={item.id}>
        <div className='item__image'>
          <img src={item.thumbnailUrl} alt={item.id} onClick={() => {onSelectImgId(id); isModalChange()}}/>
        </div>
        <div className="item__title">{item.title}</div>
      </div>
    );
  });

  return (
    <div className="items-list">
      {isLoading ? <div><Spinner /></div> : 
      <div className="items-list__wrap" >
        <div
          className="items"
          style={{ transform: `translateX(-${25 * posX}%)` }} >
          {imagesList}
        </div>
        <button onClick={() => onBtnLeftClick()} className="pos pos__left">
          Left
        </button>
        <button onClick={() => onBtnRightClick()} className="pos pos__right">
          Right
        </button >
        <button onClick={() => onChangeSlider()} className="pos pos__back">К списку ...</button>
      </div>}
      {modal ? <Modal arr={tempArr} id={imgId} modal={modal} isModalChange={isModalChange}/> : null}
    </div>
  );
};

export default ItemsList;
