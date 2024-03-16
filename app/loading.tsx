"use client";
import { Spinner } from "react-bootstrap";
import style from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={style.loading}>
      <Spinner className={style.loading__img} animation="border" variant="primary" />
    </div>
  );
}
