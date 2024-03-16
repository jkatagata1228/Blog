import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "../../../util/database";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (session && session.user) {
    req.body.author = session.user.email;
    if (session.user.email == req.body.author) {
      if (req.method == "POST") {
        try {
          const db = (await connectDB).db("forum");
          await db.collection("post").updateOne(
            { _id: new ObjectId(req.body._id) },
            {
              $set: { title: req.body.title, content: req.body.content },
            }
          );
          return res.redirect(302, "/list");
        } catch (error) {
          return res.status(500).json("sorry");
        }
      }
    }

    // 서버기능 처리성공return res.status(200).json("ok");
    // 서버기능 처리실패 return res.status(500).json("ok");
    // 서버기능 처리실패(유저잘못) return res.status(400).json("ok");
  }
}
