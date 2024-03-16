import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { notFound } from "next/navigation";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ReactHtmlParser from "html-react-parser";
import Listgroup from "../../list/Listgroup";
import Link from "next/link";
import DeleteBtn from "../../components/edit/DeleteBtn";

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
          <div style={{ display: "flex", justifyContent: "end", padding: "1em 0 0 0" }}>
            <Link href={`/edit/${props.params._id}`}>
              <Button variant="success">Edit</Button>
            </Link>
            <DeleteBtn props={props} />
          </div>
          <Comment _id={props.params._id}></Comment>
        </Col>
      </Row>
    </Container>
  );
}
