import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CardContainer from "./CardContainer";
import { ModalContext } from "./CarouselContainer";
import FormInput from "./FormInput";
import ModalUi from "./ModalUi";

const AddCard = () => {
  const { handleShow, showAddModal } = useContext(ModalContext);

  return (
    <div className="add-card">
      <CardContainer>
        <div className="card-container-add">
          <Button
            variant="primary"
            className="plus-button"
            onClick={() => handleShow("add")}
          >
            <i className="fa fa-plus" aria-hidden="true"></i>
          </Button>
          <div className="add-card-text"> Add Card</div>
        </div>
      </CardContainer>
      <ModalUi type="add" show={showAddModal} heading={"Enter Details"}>
        <FormInput type="add" isDisabled={false} />
      </ModalUi>
    </div>
  );
};

export default AddCard;
