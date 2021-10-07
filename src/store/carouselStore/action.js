import axios from "axios";
import { ADD_NEW_CARD, FETCH_CAROUSEL_DATA } from "../../shared/ActionTypes";

const receivedCarouselData = (data) => {
  return {
    type: FETCH_CAROUSEL_DATA,
    payload: data,
  };
};

export const getCarouselData = (dispatch) => {
  axios
    .get("/mock/CarouselData.json")
    .then((res) => dispatch(receivedCarouselData(res.data)))
    .catch((err) => console.log(err));
};

export const addNewCard = (data) => {
  return {
    type: ADD_NEW_CARD,
    payload: data,
  };
};
