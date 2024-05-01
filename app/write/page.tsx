"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "react-quill/dist/quill.snow.css";
import WriteReactQuill from "../components/ReactQuill";
import { useRouter } from "next/navigation";
import CustomButton from "../components/common/button/CustomButton";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const writePage = () => {
  const [select, setSelect] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const getTitleValue = (e) => {
    setTitle(e.target.value);
  };
  const getSelectValue = (e) => {
    setSelect(e.target.value);
  };

  const writeHandler = () => {
    if (select === null) {
      return alert("カテゴリーを選択してください。");
    } else if (title === "") {
      return alert("タイトルを入力してください。");
    } else if (content === "") {
      return alert("本文を入力してください。");
    }
    fetch("/api/post/new", { method: "POST", body: JSON.stringify({ title: title, content: content, value: select, date: date }) })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 200) {
          alert("投稿に成功しました。");
          router.push("/list");
        }
      });
  };
  // }
  // const modules = {
  //   toolbar: {
  //     container: [
  //       ["bold", "italic", "underline", "strike"], // toggled buttons
  //       ["blockquote", "code-block"],
  //       ["link", "image", "video", "formula"],

  //       [{ header: 1 }, { header: 2 }], // custom button values
  //       [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  //       [{ script: "sub" }, { script: "super" }], // superscript/subscript
  //       [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  //       [{ direction: "rtl" }], // text direction

  //       [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  //       [{ header: [1, 2, 3, 4, 5, 6, false] }],

  //       [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  //       [{ font: [] }],
  //       [{ align: [] }],

  //       ["clean"], // remove formatting button
  //     ],
  //   },
  // };
  const today = new Date();
  const date = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
  return (
    <Container>
      <Row>
        <Col>
          <Form.Select aria-label="Default select example" onChange={getSelectValue}>
            <option>Please select</option>
            <option value="faReact">React/Nextjs</option>
            <option value="faSass">CSS/SCSS</option>
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
      <div style={{ display: "flex", margin: " 80px 0 0 0", justifyContent: "end" }}>
        <CustomButton text={"cancel"} />
        <CustomButton text={"write"} writeHandler={writeHandler} />
      </div>
    </Container>
  );
};
export default writePage;
