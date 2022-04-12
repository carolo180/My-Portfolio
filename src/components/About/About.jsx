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
import firebase from "../../assets/images/firebase.png"
import cv from "../../assets/images/frame.pdf"
import { GiCloudDownload } from 'react-icons/gi';

import "./About.css"

const About = () => {

  return (
    <div className='About'>
       
    
         <div className='flex flex-col md:flex-row md:h-screen bg-[#1B001C]'>
           
       <article className='flex flex-col justify-center content-center px-8 mt-16 md:mt-0 md:pl-10 md:w-7/12' id="sect">
          <h1 className='text-4xl font-bold text-center' id="text-shadow">Hello, I am Carolina</h1><br></br>
          <p className='text-lg text-justify text-silver md:pl-4 pt-0'>
             I am a development lover, 
             my passion is solving problems using design and code.
             i start to learned for fun and did a very cool project on.
             I really like interact with new tools and learn new skills,
             keeping me engaged in a new career. 
             althought dont like describe myself by the work i have done,
             i prefer define myself by the work i want to do,
             i prefer to keep learning, continue challenging myself,
             and do interesting things that matters.</p>
           
          <div className='grid grid-cols-3 mt-10 pl-10 max-h-8 md:flex md:justify-between' >
                  <img src={css} width="35px" />
                  <img src={js} width="35px" />
                  <img src={react} width="40px" />
                  <img src={node} width="35px" className='pt-8 md:pt-0' />
                  <img src={redux} width="40px" className='pt-8 md:pt-0' />
                  <img src={sql} width="40px" className='pt-8 md:pt-0' />
                  <img src={firebase} width="40px" className='pt-8 md:pt-0' />
                  <img src={php} width="45px" className='pt-8 md:pt-0' />
                  <img src={mongo} width="45px" className='pt-8 md:pt-0' />
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