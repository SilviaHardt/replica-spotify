//JavaScript Assincrono - async await - Fullfilled

import { MongoClient } from "mongodb";

const URI = "mongodb+srv://SilviaHardt:28111991@cluster0.qocsw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyReplica");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);