import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink} from 'react-router-dom'

const NavBar = () => {
  
  
  return (
    <div className='NavDiv'>
         <Navbar  className='NavBg' variant="dark">
            <Container className=''>
                <Nav className='linkNav' >
                    <NavLink to="/login" >ED&EN/RECİPE</NavLink>
                    
                    <ul className='NavBarUl'>
                      
                        <li><NavLink to="/about" >ABOUT</NavLink></li> 
                        <li><a href="https://github.com/hfsyln">GITHUB</a></li> 
                        <li><NavLink to="/login" >LOG OUT</NavLink></li> 
                        
                    </ul>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar;