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

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar {...args}>
      <NavbarBrand href="/">
        <img src={logoCat} alt="logo" className="logocat" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/CatNew">Add A Cat</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/CatIndex">
              Adopt A Cat
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/CatIndex">
              Meet The Cats
            </NavLink>
          </NavItem>
        </Nav>
    
      </Collapse>
    </Navbar>
  );
}

export default Navigation;
