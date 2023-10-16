import { PostComment } from "@/components/comments/NewComment";
import axios from "axios";

interface PostCommentArgs {
  eventId: string;
  commentData: PostComment;
}

export async function getComments(eventId: string) {
  const response = await axios.get(`/api/comments/${eventId}`);
  return response.data;
}

export async function postComment({ eventId, commentData }: PostCommentArgs) {
  const response = await axios.post(`/api/comments/${eventId}`, commentData);
  return response.data;
}
