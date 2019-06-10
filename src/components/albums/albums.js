import React from "react";
import withApiServices from "../hoc/with-api-services";
import styled from "styled-components";

const Albums = ({ value, onSelectAlbum, onChangeSlider }) => {
  const { albums } = value;

  const albumsList = albums.map(item => {
    return (
      <Album key={item}>
        <AlbumTitle
          onClick={() => {
            onSelectAlbum(item);
            onChangeSlider();
          }}
        >
          Album №{item}
        </AlbumTitle>
      </Album>
    );
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

  @media (max-width: 780px) {
    flex-basis: 25%;
    justify-content: center;
  }

  @media (max-width: 625px) {
    flex-basis: 50%;
    justify-content: center;
  }

  @media (max-width: 360px) {
    flex-basis: 100%;
    justify-content: center;
  }
`;

const AlbumTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  background-color: #483d8b;
  width: 150px;
  height: 150px;
  border: 1px solid gray;
  border-radius: 5px;
  color: #dcdcdc;
  font-weight: bold;
  align-items: center;
`;
