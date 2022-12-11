import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Navbar, Container, Nav } from "react-bootstrap";
import { CgAddR } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { TbMessageCircle } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";

function Titlebar({ profile, setUser }) {
  // function handleLogoutClick() {
  //   fetch("/logout", { method: "DELETE" }).then((r) => {
  //     if (r.ok) {
  //       setUser(null);
  //     }
  //   });
  // }
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <NavLink className="text-decoration-none text-dark" to="/" id="logo">
          Instagram
        </NavLink>
        <Nav className="fs-3">
          <NavLink className="link-unstyled text-dark" to="/">
            <AiFillHome />
          </NavLink>
          <NavLink className="link-unstyled text-dark" to="#">
            <TbMessageCircle />
          </NavLink>
          <NavLink className="link-unstyled text-dark" to="/trending">
            <CgAddR />
          </NavLink>
          <div className="d-flex" id="m">
            <NavLink className="link-unstyled" to="/profile">
              <img className="profile" src={profile.profile_pic} alt="e" />
            </NavLink>
            <NavLink className="link-unstyled" to="/"></NavLink>
          </div>
          <Nav.Link className="link-unstyled text-dark" href="/">
            <FiLogOut />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Titlebar;
