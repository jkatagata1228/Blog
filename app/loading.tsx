"use client";
import { Spinner } from "react-bootstrap";
import style from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={style.loading}>
      <Spinner animation="border" variant="info" />
    </div>
  );
};
export default Loading;
