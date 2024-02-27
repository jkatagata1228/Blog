import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { notFound } from "next/navigation";
import { Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import ReactHtmlParser from "html-react-parser";
import Listgroup from "@/app/list/Listgroup";

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
          <Comment _id={props.params._id}></Comment>
        </Col>
      </Row>
    </Container>
  );
}
