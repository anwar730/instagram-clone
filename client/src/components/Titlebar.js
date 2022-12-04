import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { AiFillHome } from "react-icons/ai"
import { CgAddR } from "react-icons/cg"
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
        <Navbar.Brand href="/" id='logo'>Instagram</Navbar.Brand>
        <Nav className='fs-3'>
          <Nav.Link href="/"><AiFillHome /></Nav.Link>
          <Nav.Link href="#"><TbMessageCircle /></Nav.Link>
          <Nav.Link href="/trending"><CgAddR /></Nav.Link>
          <div className='d-flex' id='m'>
          <Nav.Link href="/profile">
            <img className='profile' src={profile.profile_pic} alt="e"/>
          </Nav.Link>
          <Nav.Link onClick={handleLogoutClick}><FiLogOut /></Nav.Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Titlebar