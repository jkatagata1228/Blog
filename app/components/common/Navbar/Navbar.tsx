"use client";

import Link from "next/link";
import { ListTask, PencilSquare } from "react-bootstrap-icons";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import style from "./Navbar.module.scss";
import CustomButton from "../button/CustomButton";

const NavBar = ({ session }) => {
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
              <>
                <Nav.Link href="/list">
                  <Button variant="outline-dark">
                    <ListTask />
                    List
                  </Button>
                </Nav.Link>
                {session ? (
                  <>
                    <Nav.Link href="/write">
                      <Button variant="outline-dark">
                        <PencilSquare /> Write
                      </Button>
                    </Nav.Link>
                  </>
                ) : null}
              </>
            </Nav>
            {session ? (
              <>
                <img className={style.navbar__img__logo} src="/images/IMG_6882.JPG" />
                <p className={style.navbar__p__user}>{session.user.name}</p>
                <CustomButton text={"logOut"} />
              </>
            ) : (
              <>
                <Link href="/register">
                  <CustomButton text={"register"} />
                </Link>
                <CustomButton text={"logIn"} />
              </>
            )}
            {/* Light_Mode & Dark_mode機能（未定）
            <Theme modeColor={session.modeColor} /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
