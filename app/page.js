import { connectDB } from "@/util/database";

export default async function Home() {
  const db = (await connectDB).db("forum");
  await db.collection("post").find().toArray();

  return (
    <div>
      <p>hello</p>
    </div>
  );
}
