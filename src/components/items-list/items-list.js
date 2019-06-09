import React from "react";
import { ReactComponent as Spinner } from "../spinner/spinner.svg";
import Modal from '../modal';
import styled from 'styled-components';

const ItemsList = ({ onChangeSlider, posX, tempArr, isLoading, onBtnRightClick,
                     onBtnLeftClick, onSelectImgId, imgId, modal, onModalChange
                    }) => { 
  const imagesList = tempArr.map((item, id) => {
    return (
      <Item key={item.id}>
        <SmallImage>
          <img src={item.thumbnailUrl} alt={item.id} onClick={() => {onSelectImgId(id); onModalChange()}}/>
        </SmallImage>
        <ItemTitle>{item.title}</ItemTitle>
      </Item>
    );
  });

  return (
    <List>
      {isLoading ? <div><Spinner /></div> : 
      <Wrap>
        <Items
          style={{ transform: `translateX(-${25 * posX}%)` }} >
          {imagesList}
        </Items>
        <ButtonLeft onClick={onBtnLeftClick}>
          Назад
        </ButtonLeft>
        <ButtonRight onClick={onBtnRightClick}>
          Вперед
        </ButtonRight>
        <Button onClick={onChangeSlider}>К списку ...</Button>
      </Wrap>}
      {modal ? <Modal arr={tempArr} id={imgId} isModalChange={onModalChange}/> : null}
    </List>
  );
};

export default ItemsList;

const List = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 640px;
  overflow-x: hidden;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: nowrap;
  transition: transform 0.15s ease-in-out;
  position: relative;
  margin-bottom: 60px;
`;

const Item = styled.div`
  background-color: antiquewhite;
  padding: 5px;
`;

const SmallImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: #FFF;
`;

const ItemTitle = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  z-index: 2;
`;

const ButtonLeft = styled(Button)`
  position: absolute;
  top: 225px;
  left: 200px;
  z-index: 2;
`;

const ButtonRight = styled(Button)`
  position: absolute;
  top: 225px;
  right: 200px;
  z-index: 2;
`;