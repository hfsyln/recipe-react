import NavBar from '../../components/navbar/NavBar'
import { useState } from 'react';
import RecipeCard from "./RecipeCard";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import homeSvg from '../../assets/home.svg'



const Home = () => {

const [recipes, setRecipes] = useState();
const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const [query, setQuery]= useState(``);
const [meal, setMeal]= useState(mealTypes[0].toLowerCase());

const APP_ID = "e0550b67"
const APP_KEY= "b9fce4db63d154f4247d4d944c3fba8f"
const url =`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;


const getApı = async()=> {

  if(query) {
  const {data} = await axios.get(url) ;
  console.log(data)
  console.log(data.hits)
  console.log(data.hits[0])
  setRecipes(data?.hits)
  console.log(recipes)

} else{
  console.log("please fill the form");
}
};

  return (
    <div className='HomeDiv'>

        <NavBar/>

        <h2 className='homeh2'>Food App</h2>
        
        <Card className='d-flex flex-row gap-3 mx-auto my-3' style={{ width: '30rem' }}>
                <Form.Control  onChange={(e)=> {
                console.log(e.target.value)
                setQuery(e.target.value)}}
          type="text"
          placeholder="query"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"/>
                <Button onClick={getApı} type='submit' className='HomeBtn'>Search</Button>    
          <Form.Select id="disabledSelect">
           {mealTypes.map((item, index) => (
            <option key={index} value={item.toLowerCase()}>{item}</option>
            ))} 
          </Form.Select>
        </Card>
    
         <div className="d-flex flex-wrap gap-4 m-4 justify-content-center" >
        
           {recipes ? (
            
              recipes.map((recipe, index)=> (
                   <RecipeCard key={index} recipe= {recipe}/>
                ))
               
              
           )
              : 
              <div className='imgDiv rounded-circle mx-auto my-5' style={{width:"50vw", height:"60vh"}}>
              <img className='m-5' src={homeSvg} style={{width:"30vw", height:"50vh"}} alt=""></img>
              </div>

              
              } 
        </div>

    </div>
  );
}

export default Home;