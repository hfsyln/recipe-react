import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Meal2 from "../../assets/meal2.svg"
import Form from 'react-bootstrap/Form';
//import { useNavigate } from "react-router-dom";



const Login = () => {
 
     // const navigate = useNavigate();

      const handleClick = () => {
         //navigate("/home")
         window.location.href = "/home";
      }
 
 
 
  return (
  <div className='loginDiv'>
    <Card className='bg-warning mx-auto' style={{ width: '23rem' }}>
    <Card.Body className="">
      <img src={Meal2} alt="şapka"  style={{width: "100px", height: "100px"}}/>
      
        <Form.Control className='mr-3 mt-3'
          type="text"
          placeholder="Username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />

        <Form.Control className='mr-3 mt-3'
          type="password"
          placeholder="Pasword"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      
      <Button className='mt-3' variant="secondary" onClick={handleClick}>LOGİN</Button> 
    </Card.Body>
  </Card>
  </div>
  
  )
}

export default Login;