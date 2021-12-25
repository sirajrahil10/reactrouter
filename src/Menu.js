import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar,Container,Nav } from 'react-bootstrap'

const Menu = () => {
    return (
        <div>
         <Navbar className='w-100 p-3' bg="dark" variant="dark">
    <Container>
    <Navbar.Brand >Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to='/about'>About</Nav.Link>
      <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Menu
