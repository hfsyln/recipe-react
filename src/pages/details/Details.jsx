import React from 'react'
import { useLocation } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar"
import diet from "../../assets/diet.svg"

const Details = () => {

  const {state} = useLocation()
  console.log(state.recipe)
  return (
    <div>
      
        <NavBar/>

        <div className='detDiv'>
            <div className="d-flex m-5 justify-content-center gap-5">
                <h2 className='mt-5'>{state.recipe.label}</h2>
                <img src={diet} className="mt-4" style={{with:"30vw", height:"20vh"}} />
            </div>
        </div>
        <div className="d-flex gap-5 justify-content-center">
          <div className='mt-5'>
                <p>
                   Calorie : {Math.trunc(state.recipe.calories)}
                </p>
                <p>
                  Total Weight:{state.recipe.totalWeight}
                </p>
                <p>
                  CA Quantity : {Math.round(state.recipe.totalNutrients.CA.quantity)}
                </p>
                <p>
                  KCAL: {Math.round(state.recipe.totalDaily.ENERC_KCAL.quantity)}
                </p>
            </div>
            <img src={state.recipe.image} alt=""  style={{ height:"40vh"}}/> 
              <div className='mt-5'>
                  {state.recipe.ingredientLines.map((item) => {
                    return (
                        <p>-{item}</p>
                    );
                    })} 
                </div>
            
      </div>
    </div>

  )
}

export default Details