
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
        {/* Create NavMenu and NavLinks for the Navbar*/}
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

          {/* Nav Button */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;