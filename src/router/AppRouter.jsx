import React from 'react'
import {Routes, Route  } from 'react-router-dom';
import About from '../pages/about/About';
import Details from "../pages/details/Details";
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';

const appRouter = () => {
  return (
    <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}>
                <Route path="details" element={<Details/>}/>
            </Route>
            <Route path="/about" element={<About/>} />
    </Routes>
  )
}

export default appRouter
