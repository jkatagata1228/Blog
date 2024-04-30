"use client";

import Link from "next/link";
import LoginBtn from "../LoginBtn";
import LogoutBtn from "../LogoutBtn";
import Theme from "../ThemeBtn";
import { ListTask, PencilSquare } from "react-bootstrap-icons";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import style from "./Navbar.module.scss";

const NavBar = (props) => {
  return (
    <div className={style.navbar}>
      <Navbar expand="sm">
        <Container fluid>
          <Navbar.Brand href="/">
            <p className={style.navbar__p__logo}>JUN BLOG</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              {props.modeColor != undefined && props.modeColor.value == "light" ? (
                <>
                  <Nav.Link href="/list">
                    <Button variant="outline-dark">
                      <ListTask></ListTask>List
                    </Button>
                  </Nav.Link>
                  <Nav.Link href="/write">
                    <Button variant="outline-dark">
                      <PencilSquare></PencilSquare>Write
                    </Button>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/list">
                    <Button variant="outline-light">
                      <ListTask></ListTask>List
                    </Button>
                  </Nav.Link>
                  <Nav.Link href="/write">
                    <Button variant="outline-light">
                      <PencilSquare></PencilSquare>Write
                    </Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
            {props.session ? (
              <>
                <p className={style.navbar__p__email}>{props.session.user.name}</p>
                <LogoutBtn modeColor={props.modeColor}></LogoutBtn>
              </>
            ) : (
              <>
                {props.modeColor != undefined && props.modeColor.value == "light" ? (
                  <>
                    <Link href="/register">
                      <Button variant="outline-dark">Register</Button>
                    </Link>
                    <LoginBtn modeColor={props.modeColor}></LoginBtn>
                  </>
                ) : (
                  <>
                    <Link href="/register">
                      <Button variant="outline-light">Register</Button>
                    </Link>
                    <LoginBtn modeColor={props.modeColor}></LoginBtn>
                  </>
                )}
              </>
            )}
            <Theme modeColor={props.modeColor} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
