"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "react-bootstrap";
import style from "./CustomButton.module.scss";
import { useRouter } from "next/navigation";

const CustomButton = ({ text, logInhandler, writeHandler, props }) => {
  const router = useRouter();

  if (text === "register") {
    return <Button variant="outline-dark">会員登録</Button>;
  } else if (text === "logIn") {
    return (
      <Button
        className={style.button__marginLeft}
        variant="outline-dark"
        onClick={function () {
          signIn();
        }}
      >
        ログイン
      </Button>
    );
  } else if (text === "logOut") {
    return (
      <Button
        variant="outline-dark"
        onClick={function () {
          signOut();
        }}
      >
        ログアウト
      </Button>
    );
  } else if (text === "signIn") {
    return (
      <Button
        className={style.button__marginLeft}
        variant="outline-success"
        onClick={function () {
          logInhandler();
        }}
      >
        ログイン
      </Button>
    );
  } else if (text === "signUp") {
    return (
      <Button
        className={style.button__marginLeft}
        variant="outline-success"
        onClick={() => {
          alert("現在会員登録を制限しております。");
          router.push("/list");
        }}
      >
        会員登録
      </Button>
    );
  } else if (text === "cancel") {
    return (
      <Button
        className={style.button__marginLeft}
        variant="outline-danger"
        onClick={function () {
          router.push("/list");
        }}
      >
        戻る
      </Button>
    );
  } else if (text === "write") {
    return (
      <Button
        className={style.button__marginLeft}
        variant="outline-primary"
        onClick={() => {
          writeHandler();
        }}
      >
        作成
      </Button>
    );
  } else if (text === "edit") {
    return (
      <Button
        className={style.button__marginLeft}
        variant="outline-warning"
        onClick={() => {
          router.push(`/edit/${props.params._id}`);
        }}
      >
        修正
      </Button>
    );
  } else if (text === "delete") {
    return (
      <Button
        className={style.button__marginLeft}
        variant="outline-danger"
        onClick={() => {
          if (confirm("削除しますか？")) {
            fetch("/api/post/delete", { method: "DELETE", body: props.params._id })
              .then((response) => response.json())
              .then((response) => {
                if (response.status === 200) {
                  alert("削除に成功しました。");
                  router.push("/list");
                  router.refresh();
                }
              });
          }
          return null;
        }}
      >
        削除
      </Button>
    );
  }
};
export default CustomButton;
