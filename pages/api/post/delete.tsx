import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "../../../util/database";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);

  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(req.body) });
  if (session && session.user) {
    if (req.method == "DELETE") {
      if (result.author == session.user.email) {
        {
          try {
            const db = (await connectDB).db("forum");
            await db
              .collection("post")
              .deleteOne({ _id: new ObjectId(req.body) });
            return res.redirect(302, "/list");
          } catch (error) {
            return res.status(500).json("sorry");
          }
        }
      } else console.log("x");
    }
  }

  // 서버기능 처리성공return res.status(200).json("ok");
  // 서버기능 처리실패 return res.status(500).json("ok");
  // 서버기능 처리실패(유저잘못) return res.status(400).json("ok");
}
