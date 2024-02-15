"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Theme() {
  let router = useRouter();
  useEffect(function () {
    let modeValue = ("; " + document.cookie).split(`; mode=`).pop().split(";")[0];
    if (modeValue == "") {
      document.cookie = "mode=light;, max-age=" + 3600 * 24 * 400;
    }
  }, []);

  return (
    <button
      onClick={function () {
        let modeValue = ("; " + document.cookie).split(`; mode=`).pop().split(";")[0];

        if (modeValue == "light") {
          document.cookie = "mode=dark;, max-age=" + 3600 * 24 * 400;
          router.refresh();
        } else {
          document.cookie = "mode=light;, max-age=" + 3600 * 24 * 400;
          router.refresh();
        }
      }}
    >
      🌙
    </button>
  );
}
