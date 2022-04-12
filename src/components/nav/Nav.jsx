import React, {useState} from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
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
          
          <MenuItem className='navlink'>
          <Link activeClass="active" to={`imgbox`} spy={true} smooth={true} offset={-90} duration={900} > <span className='navlink' onClick={()=>changeMenu()}>Home</span></Link>
          </MenuItem>
       
          <MenuItem className='navlink'>
          <Link activeClass="active" to={`text-shadow`} spy={true} smooth={true} offset={-90} duration={900} > <span className='navlink' onClick={()=>changeMenu()}>About</span></Link>
          </MenuItem>
          
          <MenuItem className='navlink'>
          <Link activeClass="active" to={`carru`} spy={true} smooth={true} offset={-90} duration={900} > <span className='navlink'  onClick={()=>changeMenu()}>Work</span></Link>
          </MenuItem>

          <MenuItem className='navlink'>
          <Link activeClass="active" to={`box_form`}  spy={true} smooth={true} offset={-90} duration={900} > <span className='navlink'  onClick={()=>changeMenu()}>Contact</span></Link>
          </MenuItem>

        
        </Menu>
     
      </NavBarWrapper>
    
    </NavBarContainer>
 
    </>
  )
}

export default Nav
