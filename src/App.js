import "./App.css";
import { getCarouselData } from "./store/carouselStore/action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CarouselContainer from "./components/CarouselContainer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarouselData);
    return () => {};
  }, [dispatch]);
  return <CarouselContainer />;
}

export default App;
