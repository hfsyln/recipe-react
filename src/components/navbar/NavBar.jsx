import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <div className='NavDiv'>
         <Navbar  className='NavBg' variant="dark">
            <Container className=''>
                <Navbar.Brand href="#home"> /ED&EN/RECİPE </Navbar.Brand>
                <Nav>
                    <ul className='NavBarUl'>
                        <li><Nav.Link >ABOUT</Nav.Link></li> 
                        <li><Nav.Link >GITHUP</Nav.Link></li> 
                        <li><Nav.Link >LOGOUT</Nav.Link></li> 
                    </ul>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar