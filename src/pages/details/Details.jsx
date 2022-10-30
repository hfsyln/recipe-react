import React from 'react'
import { useLocation } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar"
import meal2 from "../../assets/meal2.svg"

const Details = () => {

  const {state} =useLocation()
  console.log(state)
  return (
    <div>

    <NavBar/>

    <img src=""  className="w-40" />
    <p>Calorie:{}</p>
    <div>          </div>
    <img src="{}" alt="" />

    </div>
  )
}

export default Details