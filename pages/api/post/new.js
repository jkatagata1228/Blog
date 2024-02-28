import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  req.body = JSON.parse(req.body);
  req.body.author = session.user.email;

  if (session) {
    if (req.method == "POST") {
      try {
        const db = (await connectDB).db("forum");
        await db.collection("post").insertOne(req.body);
        return res.status(200).json("ok");
        // return res.redirect(302, "/list");
      } catch (error) {
        return res.status(500).json("sorry");
      }
    }
  }
}
// 서버기능 처리성공return res.status(200).json("ok");
// 서버기능 처리실패 return res.status(500).json("ok");
// 서버기능 처리실패(유저잘못) return res.status(400).json("ok");
