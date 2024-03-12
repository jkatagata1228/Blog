import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { notFound } from "next/navigation";
import { Card, Col, Container, Row } from "react-bootstrap";
import ReactHtmlParser from "html-react-parser";
import Listgroup from "@/app/list/Listgroup";
import Link from "next/link";
import Delete from "@/app/Delete";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({ _id: new ObjectId(props.params._id) });

  //404
  if (result === null) {
    return notFound();
  }

  return (
    <Container>
      <Row>
        <Col md={2}>
          <Listgroup></Listgroup>
        </Col>
        <Col md={10}>
          <Card body>{result.title}</Card>
          <Card body>{ReactHtmlParser(result.content)}</Card>
          <Link href={`/edit/${props.params._id}`}>수정</Link>
          <Delete />
          {/* <form>태그 쓰면 서버로 GET, POST 요청이 가능하댔는데 fetch() 라는 함수 사용해도 서버로 GET, POST, PUT, DELETE 요청이 가능합니다.
            // 이걸 ajax 라고 부릅니다.
            // 장점은 <form> 사용시 요청보내면 항상 새로고침이 되는데 ajax는 새로고침없이 요청을 보낼 수 있습니다.
            // next.js에서는 새로고침 안될수도 있으니 확인 필요
            // 그렇게 몰래 요청보내고 싶을 때 ajax를 사용해봅시다. */}
          <Comment _id={props.params._id}></Comment>
        </Col>
      </Row>
    </Container>
  );
}
