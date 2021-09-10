
// Style components of the NavBar

import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

//Navbar Styling
export const Nav = styled.nav`
  background-color: rgb(0 , 0, 0, 0.35);
  height: 85px;
  display: flex;
  width: 1920px;
  z-index: 12;
  position: fixed;
  top:0;  

`;
 
//NavLink Styling
export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  font-family: Montserrat;
  font-weight: 600;
  cursor: pointer;
  &.active {
    color: white;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #FFCF3E;
  }
`;


export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;


  }
`;

// NavButton Styling
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-weight: 600;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 10px;
  border-style: solid;
  background: #FFCF3E;
  padding: 15px 40px;
  color: #000000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000;
  }
`;