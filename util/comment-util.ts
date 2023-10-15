import { PostComment } from "@/components/comments/NewComment";
import axios from "axios";

interface PostCommentArgs {
  eventId: string;
  commentData: PostComment;
}

export async function getComments(eventId: string) {
  try {
    const response = await axios.get(`/api/comments/${eventId}`);
    return response.data;
  } catch (error) {
    return "요청에 문제가 발생했습니다.";
  }
}

export async function postComment({ eventId, commentData }: PostCommentArgs) {
  const response = await axios.post(`/api/comments/${eventId}`, commentData);
  return response.data;
}
