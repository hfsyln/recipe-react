import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Meal2 from "../../assets/meal2.svg"
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";



const Login = () => {

  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  const [user, setUser] = useState([])
 
  console.log(name)
  console.log(pass)
      const navigate = useNavigate();



       useEffect((e) => {
        
         const items = JSON.parse(localStorage.getItem("item")) || []
         setUser(items)
       }, [])

      const handleClick = () => {
        if(name && pass){

          navigate("/home")

          const person = {
            id: Math.floor(Math.random()*1000),
            name: name,
            pass: pass
          }
          user.push(person)
          console.log(user)
          localStorage.setItem("item", JSON.stringify(user));
          setUser(user)
        }else {
          alert("Eksik giriş yaptınız")
        }
        
         
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
          onChange={(e)=>{setName(e.target.value)}}
        />

        <Form.Control className='mr-3 mt-3'
          type="password"
          placeholder="Pasword"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e)=>{setPass(e.target.value)}}
        />
      
      <Button className='mt-3' variant="secondary" onClick={handleClick}>LOGİN</Button> 
    </Card.Body>
  </Card>
  </div>
  
  )
}

export default Login;