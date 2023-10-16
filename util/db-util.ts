import { MongoClient } from "mongodb";

export interface Comment {
  nickname: string;
  comment: string;
  password: string;
}

export async function connectDatabase() {
  // MongoDB 연결
  const mongoUrl = process.env.NEXT_PUBLIC_MONGODB_URL as string;
  const client = await MongoClient.connect(mongoUrl);
  return client;
}

export async function insertDocument(client: MongoClient, collection: string, comment: Comment) {
  // 'events' db에 연결
  const db = client.db("events");
  const result = await db.collection(collection).insertOne(comment);
  return result;
}

export async function getAllComments(client: MongoClient, collection: string, filter = {}) {
  const db = client.db("events");
  // comments 전부 받아오기
  const documents = await db.collection(collection).find(filter).toArray();

  return documents;
}
