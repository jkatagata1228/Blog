"use client";

import { signOut } from "next-auth/react";

export default function LogoutBtn() {
  return (
    <button
      onClick={function () {
        signOut();
      }}
    >
      로그아웃
    </button>
  );
}
