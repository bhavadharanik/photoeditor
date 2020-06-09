import React from "react";
import Card from "../components/Card";
import Computer from "../assests/images/computer.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "You tube",
          subTitle: "Getting started with programming",
          imgSrc: Computer,
          link: "https://youtu.be/TUDr56_3ijg",
          selected: false,
        },
        {
          id: 1,
          title: "You tube",
          subTitle: "Getting started with programming",
          imgSrc: "someth",
          link: "https://youtu.be/TUDr56_3ijg",
          selected: false,
        },
        {
          id: 2,
          title: "You tube",
          subTitle: "Getting started with programming",
          imgSrc: "someth",
          link: "https://youtu.be/TUDr56_3ijg",
          selected: false,
        },
      ],
    };
  }
  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };
  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}
export default Carousel;
