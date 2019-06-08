import React from "react";
import Item from "../item";
import "./items-list.css";

const ItemsList = ({ onChangeSlider, posX, tempArr }) => {
  const tempList = tempArr.map(item => {
    return (
      <div className="item" key={item.id}>
        <img src={item.thumbnailUrl} />
      </div>
    );
  });
  const imagesList = tempList;
  //   <div className="items" style={{ transform: `translateX(-${25 * posX}%)` }}>
  //     <div className="item" key={posX}>
  //       <img src={tempArr[0].thumbnailUrl} />
  //       {/* {arr[posX]} */}
  //     </div>
  //   </div>;

  return (
    <div className="items-list">
      <div className="items-list__wrap" onClick={() => onChangeSlider()}>
        <div
          className="items"
          style={{ transform: `translateX(-${25 * posX}%)` }}
        >
          {imagesList}
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
