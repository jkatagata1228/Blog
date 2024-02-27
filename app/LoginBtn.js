"use client";

import { signIn } from "next-auth/react";
import { Button } from "react-bootstrap";

export default function LoginBtn(props) {
  // return (
  //   <Button
  //     variant="outline-light"
  //     onClick={function () {
  //       signIn();
  //     }}
  //   >
  //     LogIn
  //   </Button>
  // );
  if (props.modeColor != undefined && props.modeColor.value == "light") {
    return (
      <Button
        variant="outline-dark"
        onClick={function () {
          signIn();
        }}
      >
        LogIn
      </Button>
    );
  } else {
    return (
      <Button
        variant="outline-light"
        onClick={function () {
          signIn();
        }}
      >
        LogIn
      </Button>
    );
  }
}
