import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "../../../util/database";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);

  const db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({ _id: new ObjectId(req.body) });
  if (session && session.user) {
    if (req.method == "DELETE") {
      if (result.author == session.user.email) {
        {
          try {
            const db = (await connectDB).db("forum");
            await db.collection("post").deleteOne({ _id: new ObjectId(req.body) });
            return res.status(200).json({ status: 200 });
          } catch (error) {
            return res.status(500).json("sorry");
          }
        }
      } else console.log("x");
    }
  }
}
