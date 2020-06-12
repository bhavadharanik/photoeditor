import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function Heroin(props) {
  return (
    <Jumbotron className=" p-0">
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col
            className="text-white text-center py-5 px-4 my-5"
            style={{
              backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
              backgroundSize: "contain",
            }}
          >
            {props.title && (
              <h1 className="display-1 font-weight-bolder">{props.title}</h1>
            )}
            {props.subTitle && (
              <h3 className="display-4 font-weight-lighter">
                {props.subTitle}
              </h3>
            )}
            <br></br>
            {props.text && (
              <h2 className="lead font-weight-light">{props.text}</h2>
            )}
            <br></br>
            <Button href="/app">Open Editor</Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
export default Heroin;
