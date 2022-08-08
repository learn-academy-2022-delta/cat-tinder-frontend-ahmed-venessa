import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import logoCat from "../assests/logoCat.jpg";
import { NavLink as NavLinkRouter } from "react-router-dom";

function Navigation() {
  

  return (
    <Nav className="d-flex">
      <NavbarBrand href="/">
        <img src={logoCat} alt="logo" className="logocat" />
      </NavbarBrand>

      <Nav navbar className="d-flex">
        <NavItem>
          <NavLink href="/CatNew">Add A Cat</NavLink>
        </NavItem>
        <span>|</span>
        <NavItem>
          <NavLink href="/cats">Adopt A Cat</NavLink>
        </NavItem>
        <span>|</span>

        <NavItem>
          <NavLink href="/cats">Meet The Cats</NavLink>
        </NavItem>
      </Nav>
    </Nav>
  );
}

export default Navigation;
