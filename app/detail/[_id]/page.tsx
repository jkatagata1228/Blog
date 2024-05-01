import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { notFound } from "next/navigation";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ReactHtmlParser from "html-react-parser";
import Listgroup from "../../list/Listgroup";
import Link from "next/link";
import DeleteBtn from "../../components/edit/DeleteBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import style from "./page.module.scss";
import CustomButton from "../../components/common/button/CustomButton";

const Detail = async (props) => {
  const session = await getServerSession(authOptions);
  const db = (await connectDB).db("forum");
  const data = await db.collection("post").findOne({ _id: new ObjectId(props.params._id) });

  return (
    <Container>
      <Row>
        <Col md={2}>
          <Listgroup></Listgroup>
        </Col>
        <Col md={10}>
          <Card body>{data.title}</Card>
          <Card body>{ReactHtmlParser(data.content)}</Card>
          {session ? (
            <div className={style.detail__div__button}>
              <CustomButton text={"edit"} props={props} />
              <CustomButton text={"delete"} props={props} />
            </div>
          ) : null}
          <Comment _id={props.params._id}></Comment>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
