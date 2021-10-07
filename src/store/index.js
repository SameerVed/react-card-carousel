import { combineReducers } from "redux";
import carouselReducer from "./carouselStore/reducer";

export default combineReducers({
  carousel: carouselReducer,
});
