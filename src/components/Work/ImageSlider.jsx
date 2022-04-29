import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from 'react-player'
import {CgWebsite} from "react-icons/cg";
import {BsGithub } from "react-icons/bs";
import video1 from"../../assets/images/fortaleza.mp4"
import video2 from"../../assets/images/apicovid.mp4"
import video3 from"../../assets/images/crud.mp4"
import video4 from"../../assets/images/firebasecrud.mp4"
import video5 from"../../assets/images/rickapi.mp4"
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

const ImageSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
              breakpoint: 375,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                 
              }
            }
        ]
    }
  return (
    <div className='contain-carousel'>
     
        <Slider {...settings} className='carrusel_item'>
        <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <ReactPlayer
                            url={video5}
                            className='react-player'
                            playing
                            loop
                            muted
                            width='100%'
                            height='100%'
                        />
                      <div className='smooth'>smootefect</div>
                   </div>
                    <ul className="buttons-icons">
                       <li><a target='_blank' href="https://apirickandmortyproject.netlify.app/">Go to deploy <span className='invisible'>-</span> <CgWebsite/></a></li>
                       <li><a target='_blank' href="https://github.com/dianachavezr/ApiRickAndMorty">Go to code <span className='invisible'>-</span> <BsGithub/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Api Rick and Morthy<span className="job-title"> Consuming "The Rick And Morthy Api", Made with React js.</span></h2>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <ReactPlayer
                            url={video1}
                            className='react-player'
                            playing
                            loop
                            muted
                            width='100%'
                            height='100%'
                        />
                      <div className='smooth'>smootefect</div>
                   </div>
                    <ul className="buttons-icons">
                       <li><a target='_blank' href="https://carolo180.github.io/La-fortaleza-E-commerce/">Go to deploy <span className='invisible'>-</span> <CgWebsite/></a></li>
                       <li><a target='_blank' href="https://github.com/carolo180/La-fortaleza-E-commerce.git">Go to code <span className='invisible'>-</span> <BsGithub/></a></li>
                    </ul>
                    <div className="details">
                        <h2>E-COMMERCE WEBSITE STORE<span className="job-title">Made with React and Redux</span></h2>
                       
                    </div>
                </div>
            </div>
          
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <ReactPlayer
                            url={video2}
                            className='react-player'
                            playing
                            loop
                            muted
                            width='100%'
                            height='100%'
                        />
                      <div className='smooth'>smootefect</div>
                   </div>
                    <ul className="buttons-icons">
                       <li><a target='_blank' href="https://sarisp3260.github.io/covid-api/traker2.html">Go to deploy <span className='invisible'>-</span> <CgWebsite/></a></li>
                       <li><a target='_blank' href="https://github.com/sarisp3260/covid-api.git">Go to code <span className='invisible'>-</span> <BsGithub/></a></li>
                    </ul>
                    <div className="details">
                        <h2>COVID DATA TRACKER<span className="job-title">Check the data on infections, 
                        recoveries, and the number of people vaccinated on real time,consuming 
                        disease.sh api.</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <ReactPlayer
                            url={video4}
                            className='react-player'
                            playing
                            loop
                            muted
                            width='100%'
                            height='100%'
                        />
                      <div className='smooth'>smootefect</div>
                   </div>
                    <ul className="buttons-icons">
                       <li><a target='_blank' href="https://carolo180.github.io/IPS-Misalud-React/">Go to deploy <span className='invisible'>-</span> <CgWebsite/></a></li>
                       <li><a target='_blank' href="https://github.com/carolo180/IPS-Misalud-React.git">Go to code <span className='invisible'>-</span> <BsGithub/></a></li>
                    </ul>
                    <div className="details">
                        <h2>CRUD COVID VACCINATE REGISTER APP<span className="job-title">Crud registry of vaccinated 
                        patients on health entity, made with React and Firebase</span></h2>
                    </div>
                </div>
            </div>
          
             <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <ReactPlayer
                            url={video3}
                            className='react-player'
                            playing
                            loop
                            muted
                            width='100%'
                            height='100%'
                        />
                      <div className='smooth'>smootefect</div>
                   </div>
                    <ul className="buttons-icons">
                       <li><a target='_blank' href="http://mvcphp.infinityfreeapp.com/MVC-CRUD/index.php?c=Persona">Go to deploy <span className='invisible'>-</span> <CgWebsite/></a></li>
                       <li><a target='_blank' href="https://github.com/Krosbelt/MVC-CRUD">Go to code <span className='invisible'>-</span> <BsGithub/></a></li>
                    </ul>
                    <div className="details">
                        <h2>CRUD APPOINTMENT APP<span className="job-title">An object-oriented application using 
                        the MVC (Model, View, Controller) pattern, SQL and Php. </span></h2>
                    </div>
                </div>
            </div>

            
         
       </Slider>
   
   
    </div>
  )
}

export default ImageSlider