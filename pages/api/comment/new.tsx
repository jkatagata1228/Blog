import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "../../../util/database";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  req.body = JSON.parse(req.body);
  if (session && session.user) {
    const save = {
      content: req.body.comment,
      parent: new ObjectId(req.body._id),
      author: session.user.email,
    };
    if (req.method == "POST") {
      try {
        const db = (await connectDB).db("forum");
        await db.collection("comment").insertOne(save);
        //redirect안되고있음 수정필
        // return res.redirect(302, "/list");
        res.writeHead(302, { Location: "/list" });
        res.end();
      } catch (error) {
        return res.status(500).json("sorry");
      }
    }
  }

  // 서버기능 처리성공return res.status(200).json("ok");
  // 서버기능 처리실패 return res.status(500).json("ok");
  // 서버기능 처리실패(유저잘못) return res.status(400).json("ok");
}
