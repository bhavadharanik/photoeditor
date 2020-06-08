import React from "react";
import Heroin from "../components/Heroin";

function HomePage(props) {
  return (
    <Heroin title={props.title} subTitle={props.subTitle} text={props.text} />
  );
}

export default HomePage;
