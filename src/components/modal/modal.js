import React from "react";
import styled from "styled-components";

const Modal = ({ arr, id, isModalChange }) => {
  return arr[id] ? (
    <ModalWindow>
      <CloseButton onClick={() => isModalChange()}>Закрыть</CloseButton>
      <div>
        <img src={arr[id].url} alt="bigImage" />
      </div>
    </ModalWindow>
  ) : null;
};
export default Modal;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const ModalWindow = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 100;
`;
