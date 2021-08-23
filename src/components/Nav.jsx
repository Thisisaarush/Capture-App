import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <h1> <Link id='logo' to='/'>Capture</Link> </h1>
      <ul>
        <li>
          <Link to='/' className='link'>Home</Link>
          <Line 
            transition={{duration: 0.75}} 
            initial={{width: '0%'}} 
            animate={{width: pathname === '/' ? '60%' : '0%'}}
          />
        </li>
        <li>
          <Link to='/work' className='link'>Our Work</Link>
          <Line 
            transition={{duration: 0.75}} 
            initial={{width: '0%'}} 
            animate={{width: pathname === '/work' ? '60%' : '0%'}}
          />
        </li>
        <li>
          <Link to='/contact' className='link'>Contact Us</Link>
          <Line 
            transition={{duration: 0.75}} 
            initial={{width: '0%'}} 
            animate={{width: pathname === '/contact' ? '60%' : '0%'}}
          />
        </li>
      </ul>
    </StyledNav>
  );
}

// styled components

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;

  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 2rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin-bottom: 1rem;
      font-size: 3rem;
    }
    ul {
      padding-top: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;

        & > .link {
          color: #23d997;
        }
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.1rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;

  @media (max-width: 1300px) {
    background: white;
    left: 20%;
    bottom: -50%
  }
`;


export default Nav;
