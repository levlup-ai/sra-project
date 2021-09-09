/*import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className = 'Navbar'>

            <h1>SRA</h1>

        </div>
    )
}

export default Navbar */

import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import './Navbar.css';
  
const Navbar = () => {
  return (
    <>
      <Nav>
  
        <NavMenu>
          <NavLink to='/' className="Logo">
              SRA
          </NavLink>  
          <NavLink to='/about' className="About" activeStyle>
            About Us
          </NavLink>
          <NavLink to='/' className="Courses" activeStyle>
            Courses
          </NavLink>  
          <NavLink to='/' className="Contact" activeStyle>
            Contact Us
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;