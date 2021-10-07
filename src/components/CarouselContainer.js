import React, { useState } from "react";
import AddCard from "./AddCard";
import ViewCards from "./ViewCards";
export const ModalContext = React.createContext();

const CarouselContainer = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [item, setItem] = useState({});

  const handleClose = (type) => {
    console.log("HELLO CLOSE");
    type === "add" ? setShowAddModal(false) : setShowViewModal(false);
  };
  const handleShow = (type, item) => {
    type === "add" ? setShowAddModal(true) : setShowViewModal(true);
    setItem(item);
  };

  return (
    <ModalContext.Provider
      value={{
        showAddModal,
        showViewModal,
        handleClose,
        handleShow,
        item,
      }}
    >
      <div className="caraousel-container-vw-add">
        <AddCard />
        <ViewCards />
      </div>
    </ModalContext.Provider>
  );
};

export default CarouselContainer;
