import React from "react";

const withApiServices = Wraped => {
  return props => {
    const { value, onSelectAlbum, onChangeSlider} = props;

    if (!value.albums) {
      return <div>Ожидание</div>;
    } else return <Wraped value={value} onSelectAlbum={onSelectAlbum} onChangeSlider={onChangeSlider}/>;
  };
};

export default withApiServices;
