"use client";

import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import style from "./page.module.scss";
import { redirect, useRouter } from "next/navigation";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

interface responseType {
  error?: null | string;
  status: number;
}

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const logInhandler = async () => {
    await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    }).then((response: any) => {
      if (response.status == 200) {
        router.push("/list");
        router.refresh();
      }
    });
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
          <Button
            variant="outline-danger"
            onClick={() => {
              router.push("/list");
            }}
          >
            Cancel
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => {
              logInhandler();
              // console.log(email, password);
            }}
          >
            SignIn
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default LogIn;
