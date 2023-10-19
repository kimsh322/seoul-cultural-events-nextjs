import { PostComment } from "@/components/comments/NewComment";
import axios from "axios";

interface PostCommentArgs {
  title: string;
  commentData: PostComment;
}

export async function getComments(title: string) {
  const response = await axios.get(`/api/comments/${title}`);
  return response.data;
}

export async function postComment({ title, commentData }: PostCommentArgs) {
  const response = await axios.post(`/api/comments/${title}`, commentData);
  return response.data;
}
