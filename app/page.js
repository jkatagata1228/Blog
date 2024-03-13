import { connectDB } from "@/util/database";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import style from "./page.module.scss";

export default async function Home() {
  const db = (await connectDB).db("forum");
  await db.collection("post").find().toArray();

  return (
    <Container className={style.main}>
      <Row>
        <Col md={6}>
          <div className={style.main__div}>
            <h1>Hello</h1>
            <p>I am Jang JunYong, a front-end engineer.</p>
          </div>
        </Col>
        <Col md={6}>
          <Image src="/images/IMG_6882.JPG" alt="main-image" width="300" height="300" priority />
        </Col>
      </Row>
    </Container>
  );
}
