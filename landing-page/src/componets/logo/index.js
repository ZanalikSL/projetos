import React from "react";

import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export class Logo extends React.Component {
  render() {
    return (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Landing-page React</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#section1"> Início </Nav.Link>
            <Nav.Link href="#section2"> Produtos </Nav.Link>
            <Nav.Link href="#section3"> Sobre a empresa </Nav.Link>
            <Nav.Link href="#section4"> Contatos </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
