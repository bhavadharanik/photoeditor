import React from "react";
import Heroin from "../components/Heroin";
import Welcome from "react-welcome-page";

function HomePage(props) {
  return (
    <div id="my-container">
      <Welcome
        loopDuration={1100}
        data={[
          {
            image: require("../images/camera.png"),
            text: "Be Infinite",
            imageAnimation: "flipInX",
            textAnimation: "bounce",
            backgroundColor: "#FF3354",
            textColor: "#002134",
          },
          {
            image: require("../images/round.png"),
            backgroundColor: "#23a3f9",
            text: "Edit Pictures",
          },
          {
            image: require("../images/logo.png"),
            textAnimation: "bounce",
            text: "Made by bhavadharani",
          },
        ]}
      />

      <Heroin title={props.title} subTitle={props.subTitle} text={props.text} />
    </div>
  );
}

export default HomePage;
