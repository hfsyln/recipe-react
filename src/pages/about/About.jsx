import React from 'react'
import codingSvg from "../../assets/coding.svg"
import NavBar from '../../components/navbar/NavBar';


const About = () => {
  return (
    <>
    <NavBar/>

    <div className='aboutDiv d-flex flex-column align-items-center '>
        <img className='mt-5' style={{width:"25rem"}} src={codingSvg} alt="codingSvg" />
        <h2 style={{marginTop: '2rem', marginBottom:'2rem'}}> Hi, &#128075; I'm Mike</h2>
        <h5>I’m currently learning Full-Stack Development Languages.</h5>
        <h4>
            I've already known HTML, Css, JavaScript, ReactJS, SQL, Linux,
            Python.
        </h4>
        <h5>
        <a href="70ozturkersen@gmail.com" >Send email</a> :
            70ozturkersen@gmail.com
        </h5>
    </div>
    </>
  )
}

export default About;