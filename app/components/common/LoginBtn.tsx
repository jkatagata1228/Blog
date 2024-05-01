"use client";

import { signIn } from "next-auth/react";
import { Button } from "react-bootstrap";

const LoginBtn = () => {
  return (
    <Button
      variant="outline-dark"
      onClick={function () {
        signIn();
      }}
    >
      ログイン
    </Button>
  );
};
export default LoginBtn;
