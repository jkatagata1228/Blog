"use client";

import { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getEmailValue = function (e) {
    setEmail(e.target.value);
  };
  const getPasswordlValue = function (e) {
    setPassword(e.target.value);
  };
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
            <Form.Control placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={getEmailValue} />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
            <Form.Control placeholder="UserPassword" type="password" id="inputPassword5" aria-describedby="passwordHelpBlock" onChange={getPasswordlValue} />
          </InputGroup>
        </Col>
        <button
          onClick={function () {
            fetch("api/auth/signup", { method: "POST", body: JSON.stringify({ email: email, password: password, role: "none_admin" }) });
          }}
        >
          Register
        </button>
        <button>Cancel</button>
      </Row>
    </Container>
  );
}

export default Register;
