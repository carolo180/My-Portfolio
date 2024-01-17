import React from 'react';
import selfie from "../../assets/images/selfie.png"
import css from "../../assets/images/css-3.png"
import js from "../../assets/images/js.png"
import react from "../../assets/images/react.png"
import sql from "../../assets/images/mysqle.png"
import php from "../../assets/images/php.png"
import mongo from "../../assets/images/mongo.png"
import node from "../../assets/images/nodejs.png"
import redux from "../../assets/images/redux.png"
import wordpress from "../../assets/images/wordpress.png"
import cv from "../../assets/images/cv-Carolina-Loaiza.pdf"
import { GiCloudDownload } from 'react-icons/gi';

import "./About.css"

const About = () => {

  return (
    <div className='About'>
       
    
         <div className='flex flex-col md:flex-row md:h-screen bg-[#1B001C]'>
           
       <article className='flex flex-col justify-center content-center px-8 mt-16 md:mt-0 md:pl-10 md:w-7/12' id="sect">
          <h1 className='text-4xl text-center' id="text-shadow">Hello, I am Carolina</h1><br></br>
          <p className='text-lg text-justify text-silver md:pl-4 pt-0'>
             I am a development lover, my passion is solving problems using design and code.
             I started on this knowledge path for fun and now I feel complete in to it;
             Althought I have already done very cool projects, I dont like describe myself by the work i have done,
             I prefer define myself by the work i want to do, I prefer to keep learning, continue challenging myself,
             and do interesting things that matters; That's why I am excited to find a great team from which I can learn,
             and which allows me to contribute all my ideas and knowledge.</p>
    
          <div className='grid grid-cols-3 mt-10 pl-10 max-h-8 md:flex md:justify-between' >
                  <img src={js} width="35px" />
                  <img src={react} width="40px" />
                  <img src={node} width="35px" className='pt-8 md:pt-0' />
                  <img src={redux} width="40px" className='pt-8 md:pt-0' />
                  <img src={sql} width="40px" className='pt-8 md:pt-0' />
                  <img src={wordpress} width="40px" className='pt-8 md:pt-0' />
                  <img src={php} width="43px" className='pt-8 md:pt-0' />
            </div>
       </article>

       <article className='flex flex-col justify-center items-center mt-40 pt-16 md:pt-0 md:mt-6 md:w-5/12'>
        <div className='flex justify-center items-end 
        overflow-hidden' id="rounded">
          <img src={selfie} width="210px" className='z-20' />
        </div>
        <button className='flex justify-around items-center bg-transparent text-white h-8 w-40 mt-6' id='cvbutton'>
        <a href={cv} target="_blank" download="Cv Carolina Loaiza" className='flex justify-around items-center'>
        <p className=''>Download CV </p> <GiCloudDownload className='text-xl'/>
        </a>
        
        </button>
      </article>
    </div>
    </div>

  )
}

export default About