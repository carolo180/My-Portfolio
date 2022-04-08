import React, {useState} from 'react'
import "./Nav.css"
import { NavBarContainer, NavBarWrapper, NavLogo, Menu, MenuItem, IconNav } from './NavBarElement'
import { FaBars } from 'react-icons/fa';

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
          <FaBars />
        </IconNav>
      
        <Menu click={click}>
          <MenuItem>
          <a href='#' className='navlink'>About</a>
          </MenuItem>
          <MenuItem>
          <a href='#' className='navlink'>Work</a>
          </MenuItem>
          <MenuItem>
          <a href='#' className='navlink'>Contact</a>
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