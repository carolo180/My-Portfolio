import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./Landing.css"
import { RiInstagramFill } from "react-icons/ri";
import {ImLinkedin } from "react-icons/im";
import {BsGithub } from "react-icons/bs";


const Landing = () => {

    
    useEffect(() => {
      
        let timeline = gsap.timeline();
    
        timeline.to(".imgwrapper", {
          height:"550px",
          backgroundSize:"100%",
          duration:1.5,
          ease:"power4.inOut",
         })
         .to(
           ".imgwrapper",{
             height:"300px",
             backgroundPosition:"50% 30%",
             duration:2,
             y:"100",
             ease:"power3.inOut",
            
           },
           1.5
           )
         .to(
          ".bigname",
          {
            y:"80",
            duration:2,
            ease:"power3.inOut",
          },
          1.5
        )
        .to(
          ".hide",
          {
            opacity:1,
            duration:2,
            ease:"power3.inOut",
          },
          2.3
        );
        },[]);
  return (
    <>
       <div className="imgbox">
    <div className="imgwrapper"></div>
    </div>
    
    <h1 className="bigname"><span className="by">By..</span><br></br><span className="nombre">Carolina Loaiza</span></h1>
    <span className="scroll hide"></span>
  
     <div className='box hide'>
       <p className="full">Full Stack Developer<span className="city">Bogotá-Colombia</span></p>
     
       <ul className='socialmedia'>
         <li>
           <a target='_blank' href='https://www.instagram.com/loaizacarolina/saved/?hl=es-la'><RiInstagramFill className="socialicon line"/></a>
         </li>
         <li>
           <a target='_blank' href='https://www.linkedin.com/in/carolina-loaiza-40631a215/'><ImLinkedin className="socialicon circle-line"/></a>
         </li>
         <li>
           <a target='_blank' href='https://github.com/carolo180'><BsGithub className="socialicon line"/></a>
         </li>
       </ul>
     </div>
    </>
  )
}

export default Landing