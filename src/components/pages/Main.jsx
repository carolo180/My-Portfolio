import React from 'react'
import Landing from '../Landing/Landing'
import Nav from '../nav/Nav'
import About from '../About/About'
import Work from '../Work/Work'
import Footer from "../footer/Footer"


const Main = () => {
  
  return (
    <>
      <div className='first_view'>
       <Nav />
       <Landing />
       
      </div>
        <About />
        <Work />
        <Footer/>
       
    </>
   
    )
}

export default Main