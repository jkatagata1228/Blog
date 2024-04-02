"use client";

import Link from "next/link";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import ReactHtmlParser from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faSass, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import style from "./Listitem.module.scss";
// function a({ result }) {
//   return (
//     <div className="list-item">
//       {result.map(function (a, i) {
//         return (
//           <Container>
//             <Row>
//               <Col>
//                 <div className="list-item" key={i}>
//                   <Link prefetch={false} href={`/detail/${result[i]._id}`}>
//                     <h4>{a.title}</h4>
//                   </Link>
//       <Link href={`/edit/${result[i]._id}`}>수정</Link>
//       {/* <form>태그 쓰면 서버로 GET, POST 요청이 가능하댔는데 fetch() 라는 함수 사용해도 서버로 GET, POST, PUT, DELETE 요청이 가능합니다.
// 이걸 ajax 라고 부릅니다.
// 장점은 <form> 사용시 요청보내면 항상 새로고침이 되는데 ajax는 새로고침없이 요청을 보낼 수 있습니다.
// next.js에서는 새로고침 안될수도 있으니 확인 필요
// 그렇게 몰래 요청보내고 싶을 때 ajax를 사용해봅시다. */}
//       <span
//         onClick={function (e) {
//           //ajax문법 get 요청, { method : "POST"}생략가능 , then요청완료시특정코드를실행
//           fetch("/api/post/delete", { method: "DELETE", body: result[i]._id }).then(function () {
//             e.target.parentElement.style.opacity = 0;
//             setTimeout(function () {
//               e.target.parentElement.style.display = "none";
//             }, 1000);
//             // console.log("ajax문법 then요청완료시특정코드를실행");

//             // ajax문법 POST 요청 , PUT , DELETE 요청도 동일 , 어레이 오브젝트 보내고싶을땐 제이슨화 시켜야 됨ex) JSON.stringify([1,2,3])
//             // fetch("/url", { method : "POST" , body : "보내고싶은데이터"}).then(function () {
//             //   console.log("ajax문법 then요청완료시특정코드를실행");
//             //서버에서 보낸 메세지 출력 방법
//             // fetch("/api/post/delete", { method: "DELETE", body: result[i]._id }).then(function (r) {
//             //   return r.json()}).then(function(r){ console.log(r) });
//             //Ajax 에러 처리
//             //                   fetch('/URL')
//             // .then((r)=>{
//             //   if(r.status == 200) {
//             //     return r.json()
//             //   } else {
//             //     //서버가 에러코드전송시 실행할코드
//             //   }
//             // })
//             // .then((result)=>{
//             //   //성공시 실행할코드
//             // }).catch((error)=>{
//             //   //인터넷문제 등으로 실패시 실행할코드
//             //   console.log(error)
//             // })
//             //Ajax는 코드가 길기때문에 axios라이브러리 씀
//           });
//         }}
//       >
//         삭제
//       </span>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         );
//       })}
//     </div>
//   );
// }

function ListItem(props) {
  return (
    <div className={style.listItem}>
      {props.result.map(function (a, i) {
        return (
          <ListGroup key={i}>
            <ListGroup.Item action href={`/detail/${props.result[i]._id}`} style={{ marginBottom: "16px" }}>
              <p style={{ fontWeight: "bold" }}>{props.result[i].title}</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {props.result[i].value === "faReact" && <FontAwesomeIcon icon={faReact} size="xl" style={{ color: "#61DAFB" }} />}
                {props.result[i].value === "faSass" && <FontAwesomeIcon icon={faSass} size="xl" style={{ color: "#CF649A" }} />}
                {props.result[i].value === "faGitAlt" && <FontAwesomeIcon icon={faGitAlt} size="xl" style={{ color: "#F14E32" }} />}
                <p className={style.listItem__p}>{props.result[i].date}</p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </div>
  );
}

export default ListItem;
