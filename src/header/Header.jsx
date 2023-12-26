import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
    const navPropsHandler = ({isActive}) =>{
        return {
            color :  isActive ? 'plum' : 'white',
            // backgroundColor: isActive ? 'black' : '#154979',
            borderBottom: isActive ? '3px solid plum' : '',
        }
    }
   
  return (
    <div>
        <nav >
          <ul className={classes.nav}>
            <li> <NavLink className={classes.navlink} style={navPropsHandler} to="/">Home</NavLink></li>
            <li> <NavLink className={classes.navlink} style={navPropsHandler} to="about">About</NavLink></li>
            <li> <NavLink className={classes.navlink} style={navPropsHandler} to="contact">Contact</NavLink></li>
            <li> <NavLink className={classes.navlink} style={navPropsHandler} to="counter">Counter</NavLink></li>
            <li> <NavLink className={classes.navlink} style={navPropsHandler} to="product">Products</NavLink></li>
            <li> <NavLink className={classes.navlink} style={navPropsHandler} to="service">Services</NavLink></li>
            <li> <NavLink className={classes.navlink} style={navPropsHandler} to="faq">FAQs</NavLink></li>
          </ul>
        </nav>

    </div>
  )
}

export default Header