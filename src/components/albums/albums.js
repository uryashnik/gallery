import React from "react";
import withApiServices from "../hoc/with-api-services";
import "./albums.css";
import styled from 'styled-components';

const Albums = ({value, onSelectAlbum, onChangeSlider}) => {

  const { albums } = value;

  const albumsList = albums.map((item) => {
    return <Album key={item}>
                <AlbumTitle onClick={() => {onSelectAlbum(item); onChangeSlider()}}>Album №{item}</AlbumTitle>
            </Album>;
  });

  return <AlbumList>{albumsList}</AlbumList>;

};

export default withApiServices(Albums);

const AlbumList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Album = styled.div`
  display: flex;
  flex-basis: 20%;
  justify-content: center;
`;

const AlbumTitle =  styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  background-color: rgb(144, 223, 236);
  width: 150px;
  height: 150px;
  border: 1px solid gray;
  border-radius: 5px;
  align-items: center;
`;

