"use client";

import Link from "next/link";
import LoginBtn from "../LoginBtn";
import LogoutBtn from "../LogoutBtn";
import Theme from "../ThemeBtn";
import { ListTask, PencilSquare } from "react-bootstrap-icons";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import style from "./Navbar.module.scss";

function NavBar(props) {
  return (
    <Navbar expand="sm" className={style.navbar}>
      <Container fluid>
        <Navbar.Brand href="/">
          <p className={style.navbar__p__logo} style={{ marginBottom: "0px" }}>
            JUN
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            <Nav.Link href="/list">
              {props.modeColor != undefined && props.modeColor.value == "light" ? (
                <Button variant="outline-dark">
                  <ListTask></ListTask>List
                </Button>
              ) : (
                <Button variant="outline-light">
                  <ListTask></ListTask>List
                </Button>
              )}
            </Nav.Link>
            <Nav.Link href="/write">
              {props.modeColor != undefined && props.modeColor.value == "light" ? (
                <Button variant="outline-dark">
                  <PencilSquare></PencilSquare>Write
                </Button>
              ) : (
                <Button variant="outline-light">
                  <PencilSquare></PencilSquare>Write
                </Button>
              )}
            </Nav.Link>
          </Nav>
          {props.session ? (
            <>
              <p className="p-email" style={{ marginRight: "6px", marginBottom: "0px" }}>
                {props.session.user.name}
              </p>
              <LogoutBtn modeColor={props.modeColor}></LogoutBtn>
            </>
          ) : (
            <>
              <Link href="/register">
                <button>Register</button>
              </Link>
              <LoginBtn modeColor={props.modeColor}></LoginBtn>
            </>
          )}
          <Theme modeColor={props.modeColor}></Theme>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
