import React, {useState} from 'react'
import {Link} from "react-scroll"
import { NavLink } from "react-router-dom";
import "./Nav.css"
import { NavBarContainer, NavBarWrapper, NavLogo, Menu, MenuItem, IconNav } from './NavBarElement'
import { FaBars, FaTimes } from 'react-icons/fa';


const Nav = () => {

  const [click, setClick] = useState(false);

  const changeMenu = () =>{
    setClick(!click);
  }
  return (
    <>
    <NavBarContainer className='hide'>
   
      <NavBarWrapper>

        <NavLogo>
          <h2 className="name">Surfing Whales</h2>
          <p className='slogan'>Code & Creative Lab</p>
        </NavLogo>

        <IconNav onClick={()=>changeMenu()}>
          {
            click ? <FaTimes /> :  <FaBars />
          }
        </IconNav>
      
        <Menu click={click}>
          
          <MenuItem>
          <Link to={`imgbox`} smooth={true} offset={-70} duration={500}> <span className='navlink' onClick={()=>changeMenu()}>Home</span></Link>
          </MenuItem>
       
          <MenuItem>
          <Link to={`text-shadow`} smooth={true} offset={-70} duration={500}> <span className='navlink' onClick={()=>changeMenu()}>About</span></Link>
         
          </MenuItem>
          <MenuItem>
          <Link to={`carru`} smooth={true} offset={-70} duration={500}> <span className='navlink' onClick={()=>changeMenu()}>Work</span></Link>
          </MenuItem>
          <MenuItem>
          <Link to={`box_form`} smooth={true} offset={-70} duration={500}> <span className='navlink' onClick={()=>changeMenu()}>Contact</span></Link>
          </MenuItem>

        
        </Menu>
     
      </NavBarWrapper>
    
    </NavBarContainer>
 
    </>
  )
}

export default Nav
/*
   <nav className="hide">
        <div className='logo'>
        <h2 className="name">Surfing Whales</h2>
        <p className='slogan'>Code & Creative Lab</p>
        </div>
     
      <ul>
        <li className='navlink'>
          <a href='#'>work</a>
        </li>
        <li className='navlink'>
          <a href='#'>About</a>
        </li>
        <li className='navlink'>
          <a href='#'>Contact</a>
        </li> 
      </ul>
    </nav>
    */