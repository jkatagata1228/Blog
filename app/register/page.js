"use client";

import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import style from "./page.module.scss";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getNameValue = function (e) {
    setName(e.target.value);
  };
  const getEmailValue = function (e) {
    setEmail(e.target.value);
  };
  const getPasswordlValue = function (e) {
    setPassword(e.target.value);
  };
  return (
    <Container fluid="md" className={style.register}>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text>Name</InputGroup.Text>
            <Form.Control placeholder="Please enter your name" aria-label="Username" aria-describedby="basic-addon1" onChange={getNameValue} />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Email</InputGroup.Text>
            <Form.Control placeholder="Please enter your e-mail" aria-label="Username" aria-describedby="basic-addon1" onChange={getEmailValue} />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Password</InputGroup.Text>
            <Form.Control
              placeholder="Please enter your password"
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              onChange={getPasswordlValue}
            />
          </InputGroup>
        </Col>
        <div className={style.register__div__btn}>
          <Button variant="outline-danger">Cancel</Button>
          <Button
            variant="outline-primary"
            onClick={function () {
              fetch("api/auth/signup", { method: "POST", body: JSON.stringify({ name: name, email: email, password: password, role: "none_admin" }) });
            }}
          >
            Register
          </Button>
        </div>
      </Row>
    </Container>
  );
}

export default Register;
