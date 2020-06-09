import React from "react";
import Heroin from "../components/Heroin";
import Carousel from "../components/Carousel";

function HomePage(props) {
  return (
    <div>
      <Heroin title={props.title} subTitle={props.subTitle} text={props.text} />
      <Carousel />
    </div>
  );
}

export default HomePage;
