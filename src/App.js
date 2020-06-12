import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import EditorPage from "./pages/EditorPage";
import { Helmet } from "react-helmet";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Bhavadharani",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "Editor", path: "/app" },
      ],
      home: {
        title: "Create Memories With us",
        subTitle: "Edit your photos",
        text: "Explore the styles",
      },
    };
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Photo Editor</title>
        </Helmet>
        <Router>
          <Container className="p-0" fluid={true}>
            <NavBar className="border-bottom" bg="transparent" expand="lg">
              <NavBar.Brand>Photo Editor</NavBar.Brand>

              <NavBar.Toggle
                className="border-0"
                aria-controls="navbar-toggle"
              />
              <NavBar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                  <Link className="nav-link" to="/app">
                    Editor
                  </Link>
                </Nav>
              </NavBar.Collapse>
            </NavBar>
            <Route
              path="/"
              exact
              render={() => (
                <HomePage
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}
                  text={this.state.home.text}
                />
              )}
            />
            <Route path="/app" exact render={() => <EditorPage />} />
            <Footer />
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
