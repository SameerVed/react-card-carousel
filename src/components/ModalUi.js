import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { ModalContext } from "./CarouselContainer";

const ModalUi = (props) => {
  const { handleClose } = useContext(ModalContext);

  return (
    <Modal show={props.show} onHide={() => handleClose(props.type)}>
      <Modal.Header closeButton>
        <Modal.Title>{props.heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
};

export default ModalUi;
