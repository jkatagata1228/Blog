import ListItem from "../../components/list-item/ListItem";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Listgroup from "../Listgroup";
import { connectDB } from "../../../util/database";

//빌드할때 스태틱 렌더링 된것을 강제로 다이나믹 렌더링으로 바꿔주는코드
//dynamic 이라는 예약된 변수
// export const dynamic = "force-dynamic"

export default async function ReactNextjsList() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find({ value: "faSass" }).toArray();
  result = result.map((a, i) => {
    a._id = a._id.toString();
    return a;
  });
  return (
    <Container>
      <Row>
        <Col md={2}>
          <Listgroup></Listgroup>
        </Col>
        <Col md={10}>
          <div className="list-bg">
            <ListItem result={result}></ListItem>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

//입장권 발급방식은 대포적으로 2가지가있다

//session방식
//입장권에 session id 만 적혀있다(유저정보나 언제로그인했는지는 안적혀있음)
//session id 주고 유저가 무언가를 요청했을때 db에서 session id 비교함
//장점은 유저의 요청마다 로그인상태 체크가능
//단점은 그만큼 db에 부담

//token방식
//토큰방식은 대부분 JWT를 의미하기때문에 JWT로 이해해도 됨
//유저한테 입장권 암호화해서 발금함 (db가 아니라 입장권에 정보적음)
//유저가 요청할때 입장권까봄
//장점은 db부담적음
//단점은 나쁜 입장권 소멸시키거나 그럴수업음

//OAuth
//사용권한을 빌려쓴다고 생각하면됨
//회원가입할때 사용하면 소셜로그인이 그러함
