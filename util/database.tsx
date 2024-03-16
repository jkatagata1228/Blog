import { MongoClient, MongoClientOptions } from "mongodb";
const url = `mongodb+srv://admin:${process.env.DATABASE_SECRET}@cluster0.hociu6e.mongodb.net/forum?retryWrites=true&w=majority`;

let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}
export { connectDB };
