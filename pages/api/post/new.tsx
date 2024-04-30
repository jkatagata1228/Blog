import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { NextResponse } from "next/server";
import { connectDB } from "../../../util/database";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  req.body = JSON.parse(req.body);

  if (session && session.user) {
    req.body.author = session.user.email;
    req.body.name = session.user.name;
    if (req.method == "POST") {
      try {
        const db = (await connectDB).db("forum");
        await db.collection("post").insertOne(req.body);
        // res.status(200).json({ redirect: "/list" });
        // return NextResponse.redirect("/list", 302);
        // res.redirect(302, "/list");
        res.status(200).json("ok");
      } catch (error) {
        return res.status(500).json("sorry");
      }
    }
  }
}
// 서버기능 처리성공 return res.status(200).json("ok");
// 서버기능 처리실패 return res.status(500).json("sorry");
// 서버기능 처리실패(유저잘못) return res.status(400).json("ok");
