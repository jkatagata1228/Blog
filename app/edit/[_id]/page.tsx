import { ObjectId } from "mongodb";
import ReactHtmlParser from "html-react-parser";
import { connectDB } from "../../../util/database";

export default async function Edit(props) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({ _id: new ObjectId(props.params._id) });
  return (
    <div className="p-20">
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title}></input>
        <input name="content" defaultValue={result.content}></input>
        <input style={{ display: "none" }} name="_id" defaultValue={result._id}></input>
        <button type="submit">test</button>
      </form>
    </div>
  );
}
