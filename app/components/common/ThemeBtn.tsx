"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { SunFill } from "react-bootstrap-icons";

export default function Theme(props) {
  let router = useRouter();

  useEffect(function () {
    if (document.cookie) {
      const modeValue = ("; " + document.cookie).split(`; mode=`).pop().split(";")[0];
      if (modeValue == "") {
        document.cookie = "mode=dark;, max-age=" + 3600 * 24 * 400;
      }
    }
  }, []);
  // return (
  //   <Button
  //     variant="outline-light"
  //     onClick={function () {
  //       document.cookie = "mode=light;, max-age=" + 3600 * 24 * 400;
  //       router.refresh();
  //     }}
  //   >
  //     <SunFill></SunFill>
  //   </Button>
  // );
  if (props.modeColor != undefined && props.modeColor.value == "light") {
    return (
      <Button
        variant="outline-dark"
        onClick={function () {
          document.cookie = "mode=dark;, max-age=" + 3600 * 24 * 400;
          router.refresh();
        }}
      >
        <SunFill></SunFill>
      </Button>
    );
  } else {
    return (
      <Button
        variant="outline-light"
        onClick={function () {
          document.cookie = "mode=light;, max-age=" + 3600 * 24 * 400;
          router.refresh();
        }}
      >
        <SunFill></SunFill>
      </Button>
    );
  }
}
