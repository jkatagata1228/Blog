"use client";

import { signOut } from "next-auth/react";
import { Button } from "react-bootstrap";

export default function LogoutBtn(props) {
  // return (
  //   <Button
  //     variant="outline-light"
  //     onClick={function () {
  //       signOut();
  //     }}
  //   >
  //     LogOut
  //   </Button>
  // );
  if (props.modeColor != undefined && props.modeColor.value == "light") {
    return (
      <Button
        variant="outline-dark"
        onClick={function () {
          signOut();
        }}
      >
        LogOut
      </Button>
    );
  } else {
    return (
      <Button
        variant="outline-light"
        onClick={function () {
          signOut();
        }}
      >
        LogOut
      </Button>
    );
  }
}
