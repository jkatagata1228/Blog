"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "react-quill/dist/quill.snow.css";
import WriteReactQuill from "../ReactQuill";
// function a() {
//   // if(session){
//   //   return(<div></div>)
//   // }else {<div>
//   //   로그인하세요
//   // </div>}

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function Write() {
  const [select, setSelect] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getTitleValue = function (e) {
    setTitle(e.target.value);
  };
  const getSelectValue = function (e) {
    setSelect(e.target.value);
  };
  const modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],
        ["link", "image", "video", "formula"],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction

        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ["clean"], // remove formatting button
      ],
    },
  };
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  return (
    <Container>
      <Row>
        <Col>
          <Form.Select aria-label="Default select example" onChange={getSelectValue}>
            <option>Please select</option>
            <option value="faReact">React/Nextjs</option>
            <option value="faSas">CSS/SCSS</option>
            <option value="faGitAlt">Git</option>
          </Form.Select>
          <InputGroup className="mb-3">
            <Form.Control name="title" placeholder="Title" onChange={getTitleValue} />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <WriteReactQuill content={content} setContent={setContent} />
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: "80px" }}>
          <Button href="/list" variant="outline-danger">
            Cancel
          </Button>
          <Button
            onClick={function () {
              fetch("/api/post/new", { method: "POST", body: JSON.stringify({ title: title, content: content, value: select, date: date }) })
                .then((response) => response.json())
                .then(window.location.replace("/list"));
            }}
            variant="outline-primary"
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default Write;
