import React from "react";
import withApiServices from "../hoc/with-api-services";
import "./albums.css";

const Albums = ({value, onSelectAlbum, onChangeSlider}) => {

  const { albums } = value;

  const albumsList = albums.map((item) => {
    return <div className='albumList__item' key={item}>
                <div className='albumList__name' onClick={() => {onSelectAlbum(item); onChangeSlider()}}>Album №{item}</div>
            </div>;
  });

  return <div className="albumList">{albumsList}</div>;

};

export default withApiServices(Albums);