import React from 'react'
import {Link} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
}from 'react-bootstrap';

function Heading() {
  return (
   <Navbar color='dark' className="dark">
    <Container>
    <NavbarBrand className="heading" href='/'>UserList</NavbarBrand>
    <Nav>
      <NavItem>
        <Link className="btn btn-primary " to="/Create">Add User</Link>
      </NavItem>
    </Nav>
    </Container>

   </Navbar>
  )
}

export default Heading