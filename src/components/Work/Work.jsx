import React from "react";
import ImageSlider from "./ImageSlider";

import "../../css/App.css"


const Work = () => {
   
    return (
        <div className="carousel bg-[#1B001C]  md:h-screen" id="carru">
        <h1 className="slider_title">Check it out some of my projects</h1>
          <ImageSlider />
        </div>
      );
    }
    

export default Work