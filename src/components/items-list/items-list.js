import React from "react";
//import Item from "../item";
import "./items-list.css";
import Modal from '../modal';

const ItemsList = ({ onChangeSlider, posX, tempArr, isLoading, onBtnRightClick,
                     onBtnLeftClick, onSelectImgId, imgId, isModalOpen
                    }) => { 
  const imagesList = tempArr.map((item, id) => {
    return (
      <div className="item" key={item.id}>
        <img src={item.thumbnailUrl} alt={item.id} onClick={() => {onSelectImgId(id)}}/>
        <div className="item__title">{item.title}</div>
      </div>
    );
  });



  return (
    <div className="items-list">
      {isLoading ? <div>Loading ...</div> : 
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
      <Modal arr={tempArr} id={imgId} isModalOpen={isModalOpen}/>
    </div>
  );
};

export default ItemsList;
