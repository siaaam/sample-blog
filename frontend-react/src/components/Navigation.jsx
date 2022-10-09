import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

        <Nav className="d-flex justify-content-end">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/blogs">
            Blogs
          </Nav.Link>
          <Nav.Link as={NavLink} to="/add">
            Add Blog
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
