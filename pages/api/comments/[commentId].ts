import { connectDatabase, getAllComments, insertDocument } from "@/util/db-util";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

interface NewComment {
  nickname: string;
  comment: string;
  password: string;
  rating: number;
  date: string;
  _id?: ObjectId;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const commentId = req.query.commentId as string;

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "데이터베이스 연결 실패!" });
    return;
  }

  if (req.method === "POST") {
    const { nickname, comment, password, rating } = req.body;
    const date = new Date().toString();
    const newComment: NewComment = {
      nickname,
      comment,
      password,
      date,
      rating,
    };

    let result;
    try {
      result = await insertDocument(client, commentId, newComment);
      newComment._id = result.insertedId;

      res.status(201).json({ message: "리뷰 생성.", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "리뷰 생성 실패!" });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllComments(client, commentId);
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "서버 문제 발생!" });
    }
  }

  client.close();
}

export default handler;
