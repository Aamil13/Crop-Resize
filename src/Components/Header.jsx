import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
        <Container className='d-flex justify-content-center'>
          <Navbar.Brand className='text-center fw-bolder'>Image Resizer</Navbar.Brand>
          
        </Container>
      </Navbar>
  )
}

export default Header