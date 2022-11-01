import React from 'react'
import {Routes, Route, Navigate  } from 'react-router-dom';
import About from '../pages/about/About';
import Details from "../pages/details/Details";
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';


const appRouter = () => {
  return (
    
     <Routes>
             <Route path="/login" element={<Login/>}/>
             <Route path="/home" element={<Home/>}/>
             <Route path="/details" element={<Details/>}/>
             <Route path="/about" element={<About/>} />
             <Route path="*" element={<Login/>}/>

     </Routes>
   )
}

export default appRouter;
