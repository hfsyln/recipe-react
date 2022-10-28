import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import { useState } from 'react';

import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Home = () => {

const [recipes, setRecipes] = useState([]);
const [query, setQuery]= useState("Pizza");
const [meal, setMeal]= useState("Lunch");

const APP_ID = "e0550b67"
const APP_KEY= "b9fce4db63d154f4247d4d944c3fba8f"
const url =`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;


const getApı = async()=> {
  try{
  const {data} = await axios(url) ;
  console.log(data)
  setRecipes(data.hits)
  console.log(recipes)
}catch (error){
  console.log("error")
}
};




  return (
    <div className='HomeDiv'>

        <NavBar/>
        
        <h2 className='homeh2'>Food App</h2>

        <Card className='d-flex flex-row gap-3 mx-auto my-3' style={{ width: '30rem' }}>
            
                <Form.Control 
          type="text"
          placeholder="Username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
                />
                <Button className='HomeBtn'>Search</Button>
        
                
          <Form.Select id="disabledSelect">
            <option>Breakfast</option>
          </Form.Select>
       
       
        </Card>
    




    </div>
  )
}

export default Home