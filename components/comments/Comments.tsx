import { useEffect, useState } from "react";
import NewComment, { PostComment } from "./NewComment";
import CommentList from "./CommentList";
import { ObjectId } from "mongodb";
import Loading from "../Loading";

export interface Comment extends PostComment {
  eventId: string;
  _id?: ObjectId;
}

interface Props {
  eventId: string;
}

function Comments({ eventId }: Props) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isFetchingComments, setIsFetchingComments] = useState(false);

  useEffect(() => {
    if (showComments) {
      setIsFetchingComments(true);
      fetch(`/api/comments/${eventId}`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.comments);
          setIsFetchingComments(false);
        });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData: PostComment) {
    // send data to API
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      // 실패하면 에러 던지기
      return response.json().then((data) => {
        throw new Error(data.message || "Someting went wrong!");
      });
    });
  }

  return (
    <section>
      <button onClick={toggleCommentsHandler}>{showComments ? "Hide" : "Show"} Comments</button>
      {showComments && <NewComment addCommentHandler={addCommentHandler} />}
      {showComments && !isFetchingComments && <CommentList items={comments} />}
      {showComments && isFetchingComments && <Loading />}
    </section>
  );
}

export default Comments;
