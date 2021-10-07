import React, { useContext } from "react";
import ReactElasticCarousel from "react-elastic-carousel";
import { useSelector } from "react-redux";
import CardContainer from "./CardContainer";
import { ModalContext } from "./CarouselContainer";
import FormInput from "./FormInput";
import ModalUi from "./ModalUi";

const ViewCards = () => {
  const { handleShow, showViewModal } = useContext(ModalContext);
  const carouselState = useSelector((state) => state.carousel);
  const { carouselData } = carouselState;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    carouselData && (
      <div className="carousel-vw">
        <ReactElasticCarousel breakPoints={breakPoints}>
          {carouselData.map((item, id) => (
            <div
              onClick={() => handleShow("view", item)}
              key={item.card_last_four}
            >
              <CardContainer
                key={id}
                containerType="view"
                color={item.color}
                cardName={item.card_name}
                cardLastFour={item.card_last_four}
                expiry={item.expiry}
              ></CardContainer>
            </div>
          ))}
        </ReactElasticCarousel>
        <ModalUi type="view" show={showViewModal} heading={"Card Details"}>
          <FormInput type="view" isDisabled={true} />
        </ModalUi>
      </div>
    )
  );
};

export default ViewCards;
