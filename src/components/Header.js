import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import logoCat from '../assests/logoCat.jpg'

class Header extends Component {
  render() {
    return(
      <header>
        <Nav className="header-nav">
          <NavItem>
            <NavLink to="/">
              <img src={logoCat} alt="logo" className="logocat" />
            </NavLink>
          </NavItem>
            <NavItem>
              <NavLink to="/catIndex" className="nav-link">Meet the Cats</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/catnew" className="nav-link">Add a New Cat</NavLink>
            </NavItem>
            <NavItem>
              <a target="blank" href="" className="nav-link">
                Adopt a Cat!
              </a>
            </NavItem>
        </Nav>
      </header>
    )
  }
}
export default Header