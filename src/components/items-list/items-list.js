import React from "react";
import { ReactComponent as Spinner } from "../spinner/spinner.svg";
import Modal from "../modal";
import styled from "styled-components";

const ItemsList = ({
  onChangeSlider,
  posX,
  tempArr,
  isLoading,
  onBtnRightClick,
  onBtnLeftClick,
  onSelectImgId,
  imgId,
  modal,
  onModalChange
}) => {
  const imagesList = tempArr.map((item, id) => {
    return (
      <Item key={item.id}>
        <SmallImage>
          <img
            src={item.thumbnailUrl}
            alt={item.id}
            onClick={() => {
              onSelectImgId(id);
              onModalChange();
            }}
          />
        </SmallImage>
        <ItemTitle>{item.title}</ItemTitle>
      </Item>
    );
  });

  return (
    <List>
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <Wrap>
          <Items style={{ transform: `translateX(-${33.33 * posX}%)` }}>
            {imagesList}
          </Items>
          <ButtonLeft onClick={onBtnLeftClick}>Назад</ButtonLeft>
          <ButtonRight onClick={onBtnRightClick}>Вперед</ButtonRight>
          <ButtonBack onClick={onChangeSlider}>К списку ...</ButtonBack>
        </Wrap>
      )}
      {modal ? (
        <Modal arr={tempArr} id={imgId} isModalChange={onModalChange} />
      ) : null}
    </List>
  );
};

export default ItemsList;

const List = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 480px;
  overflow-x: hidden;
  height: 70vh;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: nowrap;
  transition: transform 0.3s ease-in-out;
  position: relative;
  margin-bottom: 60px;
`;

const Item = styled.div`
  background-color: #f0f8ff;
  padding: 5px;
  color: #5f9ea0;
`;

const SmallImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: #fff;
`;

const ItemTitle = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: #6a5acd;
  border-radius: 3px;
  border: 2px solid white;
  border-radius: 3px;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  z-index: 2;
`;

const ButtonLeft = styled(Button)`
  position: absolute;
  top: 225px;
  left: 50px;
  z-index: 2;
`;

const ButtonRight = styled(Button)`
  position: absolute;
  top: 225px;
  right: 50px;
  z-index: 2;
`;

const ButtonBack = styled(Button)`
  position: absolute;
  transform: translateX(-54%);
  top: 450px;
  left: 50%;
  z-index: 2;
`;
