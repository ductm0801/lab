import React from "react";
import { Navbar, NavItem, Icon } from 'react-materialize'
import { Link } from 'react-router-dom'
export default function Navigation(){

    return(
        <Navbar className='menu'
        alignLinks="right"
        brand={<span className="brand-logo">Films</span>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
      >
        <ul>
          <li><Link to='/'><Icon left>home</Icon>Home</Link></li>
          <li><Link to='/contact'><Icon left>phone</Icon>Contact</Link></li>
        </ul>
  
      </Navbar>
    )
}