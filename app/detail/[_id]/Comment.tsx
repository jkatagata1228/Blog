"use client";

import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

export default function Comment(props) {
  let [comment, setComment] = useState("");
  let [data, setData] = useState<any[]>([]);

  //useEffect()는 html렌더링과 상관없는 쓸데없는 코드보관함
  //ajax,타이머 등 넣음
  //특징1 html 로드/재렌더링 될때 마다 실행됨
  //,[] 이러면 html 로드 될때 1회만 실행됨
  //특징2 html 보여준 후에 늦게 실행시작
  // useEffect(() => {
  //   fetch(`/api/comment/list?id=${props._id}`)
  //     .then((r) => r.json())
  //     .then((result) => {
  //       console.log(result);
  //     });
  // }, []);
  //https://yeri-kim.github.io/posts/fetch/ 참조
  useEffect(function () {
    fetch(`/api/comment/list?id=${props._id}`, { method: "GET" })
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        setData(res);
      });
  }, []);
  return (
    <div className="div-comment">
      <div>
        <p>Comments</p>
      </div>

      {data.length > 0
        ? data.map(function (a, i) {
            return <p key={i}>{a.content}</p>;
          })
        : "No Comment"}
      <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
        <Form.Control
          className="comment-form"
          as="textarea"
          placeholder="Leave a comment here"
          onChange={function (e) {
            setComment(e.target.value);
          }}
        ></Form.Control>
      </FloatingLabel>
      <Button
        variant="primary"
        onClick={function () {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({
              comment: comment,
              _id: props._id,
            }),
          });
        }}
      >
        Comment
      </Button>
    </div>
  );
}
