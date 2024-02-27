"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// function a() {
//   // if(session){
//   //   return(<div></div>)
//   // }else {<div>
//   //   로그인하세요
//   // </div>}

//   return (
//     <div className="p-20">
//       <h4>글작성</h4>
//       <form action="/api/post/new" method="POST">
//         <input name="title" placeholder="title"></input>
//         <input name="content" placeholder="content"></input>
//         <button type="submit">test</button>
//       </form>
//     </div>
//   );
// }

function Write() {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [select, setSelect] = useState("");

  const getValue = function (e) {
    setTitle(e.target.value);
  };
  const selectValue = function (e) {
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

  return (
    <Container>
      <Row>
        <Col>
          <Form.Select aria-label="Default select example" onChange={selectValue}>
            <option>Please select</option>
            <option value="1">React/Nextjs</option>
            <option value="2">CSS</option>
            <option value="3">Git</option>
          </Form.Select>
          <InputGroup className="mb-3">
            <Form.Control name="title" placeholder="Title" onChange={getValue} />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <ReactQuill name="content" className="quill" modules={modules} theme="snow" value={content} onChange={setContent} />
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: "80px" }}>
          <Button href="/list" variant="outline-danger">
            Cancel
          </Button>
          <Button
            onClick={function () {
              fetch("/api/post/new", { method: "POST", body: JSON.stringify({ title: title, content: content, value: select }) });
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
