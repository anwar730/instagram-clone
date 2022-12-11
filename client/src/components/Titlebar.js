import React from 'react'
import { AiFillHome } from "react-icons/ai"
import { Navbar, Container, Nav } from 'react-bootstrap'
import { CgAddR } from "react-icons/cg"
import { NavLink} from "react-router-dom";
import { TbMessageCircle } from "react-icons/tb"
import { FiLogOut } from "react-icons/fi"

function Titlebar({ profile, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <NavLink to="/" id='logo'>Instagram</NavLink>
        <Nav className='fs-3'>
          <NavLink to="/"><AiFillHome /></NavLink>
          <NavLink tp="#"><TbMessageCircle /></NavLink>
          <NavLink to="/trending"><CgAddR /></NavLink>
          <div className='d-flex' id='m'>
          <NavLink to="/profile">
            <img className='profile' src={profile.profile_pic} alt="e"/>
          </NavLink>
          <NavLink href="/"></NavLink>
          </div>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Titlebar