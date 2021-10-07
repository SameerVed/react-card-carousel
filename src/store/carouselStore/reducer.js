import { ADD_NEW_CARD, FETCH_CAROUSEL_DATA } from "../../shared/ActionTypes";

const initialState = {
  carouselData: [],
};

const reducer = (state = initialState, action) => {
  console.log("CARR::REDUCE", action);
  switch (action.type) {
    case FETCH_CAROUSEL_DATA:
      return {
        ...state,
        carouselData: action.payload,
      };

    case ADD_NEW_CARD:
      return {
        ...state,
        carouselData: [...state.carouselData, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
