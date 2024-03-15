import { connectDB } from "../../../util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method == "POST") {
    req.body = JSON.parse(req.body);
    let hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;
    const db = (await connectDB).db("forum");
    await db.collection("user_cred").insertOne(req.body);
    res.status(200).json("ok");
  }
}
