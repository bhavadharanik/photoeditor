import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import NavBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: 'Bhavadharani',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Be Infinite',
        subTitle: 'Projects that make a difference',
        text: 'Checkout my projects'
      },
      about: {
        title: 'About me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }
  render(){
  return (
    <Router>
      <Container className="p-0" fluid={true}>
        <NavBar className="border-bottom" bg="transparent" expand="lg">
          <NavBar.Brand>Bhavadharani</NavBar.Brand>

          <NavBar.Toggle className="border-0" aria-controls="navbar-toggle"/>
          <NavBar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>

            </Nav>
          </NavBar.Collapse>
        </NavBar>
      </Container>
    </Router>
  );
}
}

export default App;
