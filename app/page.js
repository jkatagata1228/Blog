import { connectDB } from "@/util/database";
import { Col, Container, Row } from "react-bootstrap";

export default async function Home() {
  const db = (await connectDB).db("forum");
  await db.collection("post").find().toArray();

  return (
    <Container className="main_contents">
      <Row>
        <Col md={6}>
          <div className="main_intro">
            <h1>Hello</h1>
            <p>I am Jang Jun Yong, a front-end engineer.</p>
          </div>
        </Col>
        <Col md={6}></Col>
      </Row>
    </Container>
  );
}
