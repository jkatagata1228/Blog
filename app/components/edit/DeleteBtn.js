"use client";

import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import DeleteModal from "./DeleteModal";

function Delete(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Button
        variant="danger"
        onClick={function () {
          setShow(!false);
        }}
        // onClick={function () {
        //   //ajax문법 get 요청, { method : "POST"}생략가능 , then요청완료시특정코드를실행
        //   fetch("/api/post/delete", { method: "DELETE", body: props.props.params._id }).then(function () {
        //     alert("Deleted complete"); // console.log("ajax문법 then요청완료시특정코드를실행");

        //     // // ajax문법 POST 요청 , PUT , DELETE 요청도 동일 , 어레이 오브젝트 보내고싶을땐 제이슨화 시켜야 됨ex) JSON.stringify([1,2,3])
        //     // // fetch("/url", { method : "POST" , body : "보내고싶은데이터"}).then(function () {
        //     // //   console.log("ajax문법 then요청완료시특정코드를실행");
        //     // //서버에서 보낸 메세지 출력 방법
        //     // // fetch("/api/post/delete", { method: "DELETE", body: result[i]._id }).then(function (r) {
        //     // //   return r.json()}).then(function(r){ console.log(r) });
        //     // //Ajax 에러 처리
        //     // //                   fetch('/URL')
        //     // // .then((r)=>{
        //     // //   if(r.status == 200) {
        //     // //     return r.json()
        //     // //   } else {
        //     //     서버가 에러코드전송시 실행할코드
        //     //       }
        //     //     })
        //     //     .then((result)=>{
        //     //       //성공시 실행할코드
        //     //     }).catch((error)=>{
        //     //       //인터넷문제 등으로 실패시 실행할코드
        //     //       console.log(error)
        //     //     })
        //     //     Ajax는 코드가 길기때문에 axios라이브러리 씀
        //   });
        // }}
      >
        Delete
      </Button>
      {show && <DeleteModal show={show} handleClose={handleClose} />}
      {/* <span
        onClick={function (e) {
          //ajax문법 get 요청, { method : "POST"}생략가능 , then요청완료시특정코드를실행
          fetch("/api/post/delete", { method: "DELETE", body: result[i]._id }).then(function () {
            e.target.parentElement.style.opacity = 0;
            setTimeout(function () {
              e.target.parentElement.style.display = "none";
            }, 1000);
            // console.log("ajax문법 then요청완료시특정코드를실행");

            // // ajax문법 POST 요청 , PUT , DELETE 요청도 동일 , 어레이 오브젝트 보내고싶을땐 제이슨화 시켜야 됨ex) JSON.stringify([1,2,3])
            // // fetch("/url", { method : "POST" , body : "보내고싶은데이터"}).then(function () {
            // //   console.log("ajax문법 then요청완료시특정코드를실행");
            // //서버에서 보낸 메세지 출력 방법
            // // fetch("/api/post/delete", { method: "DELETE", body: result[i]._id }).then(function (r) {
            // //   return r.json()}).then(function(r){ console.log(r) });
            // //Ajax 에러 처리
            // //                   fetch('/URL')
            // // .then((r)=>{
            // //   if(r.status == 200) {
            // //     return r.json()
            // //   } else {
            //     서버가 에러코드전송시 실행할코드
            //       }
            //     })
            //     .then((result)=>{
            //       //성공시 실행할코드
            //     }).catch((error)=>{
            //       //인터넷문제 등으로 실패시 실행할코드
            //       console.log(error)
            //     })
            //     Ajax는 코드가 길기때문에 axios라이브러리 씀
          });
        }}
      >
        삭제
      </span> */}
    </div>
  );
}

export default Delete;
