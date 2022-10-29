import React from 'react'
//import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const RecipeCard = ({key, recipe}) => {

    //let navigate = useNavigate();
    console.log(recipe)
    console.log(recipe.recipe.image)

    return (
        <div>
        <Card className='text-center d-flex flex-column gap-3 m-4 bg-secondary' key={key} style={{ width: '22vw', height: "55vh"}} >
          <Card.Img className='p-2' variant="top" style={{ height: '35vh' }} src={recipe?.recipe.image}/>
            <Card.Title>{recipe?.recipe.label}</Card.Title>
            <Button className='mx-auto my-3 CardBtn' style={{width:"10vw"}} >View More</Button>
        </Card>
        </div>
       
  )
}

export default RecipeCard;