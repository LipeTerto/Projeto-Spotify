import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://Filipe:spotify123@cluster0.t0tpnxt.mongodb.net/?appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
