import React from 'react'
import { AiFillHome } from "react-icons/ai"
import { NavLink} from "react-router-dom";
import { CgAddR } from "react-icons/cg"
import { TbMessageCircle } from "react-icons/tb"
import { FiLogOut } from "react-icons/fi"

function Titlebar({ profile, setUser }) {
  function handleLogoutClick() {
    fetch("https://instagram-clone-production.up.railway.app/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <NavLink href="/" id='logo'>Instagram</NavLink>
        <Nav className='fs-3'>
          <NavLink href="/"><AiFillHome /></NavLink>
          <NavLink href="#"><TbMessageCircle /></NavLink>
          <NavLink href="/trending"><CgAddR /></NavLink>
          <div className='d-flex' id='m'>
          <NavLink href="/profile">
            <img className='profile' src={profile.profile_pic} alt="e"/>
          </NavLink>
          <NavLink onClick={handleLogoutClick}><FiLogOut /></NavLink>
          </div>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Titlebar