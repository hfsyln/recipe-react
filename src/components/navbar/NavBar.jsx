import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink} from 'react-router-dom'

const NavBar = () => {
  
  
  return (
    <div className='NavDiv'>
         <Navbar  className='NavBg' variant="dark">
            <Container >
                <Nav className='linkNav d-flex flex-row justify-content-betwen' >
                  <div>
                    <NavLink className="text-decoration-none" to="/home" >ED&EN/RECİPE</NavLink>
                    </div> 
                    
                    <ul className='NavBarUl '>
                      
                        <li><NavLink className="text-decoration-none" to="/about" >ABOUT</NavLink></li> 
                        <li><a className="text-decoration-none" href="https://github.com/hfsyln" target="_blank">GITHUB</a></li> 
                        <li><NavLink className="text-decoration-none" to="/login" >LOG OUT</NavLink></li> 
                        
                    </ul>
                    
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar;