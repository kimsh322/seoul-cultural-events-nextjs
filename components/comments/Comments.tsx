import { useEffect, useState } from "react";
import NewComment, { PostComment } from "./NewComment";
import CommentList from "./CommentList";
import { ObjectId } from "mongodb";
import Loading from "../Loading";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getComments, postComment } from "@/util/comment-util";

export interface Comment extends PostComment {
  eventId: string;
  _id: ObjectId;
}

interface Props {
  eventId: string;
}

function Comments({ eventId }: Props) {
  const [showComments, setShowComments] = useState(false);

  const {
    isLoading: isLoadingComments,
    isRefetching,
    data,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["comments", +eventId],
    queryFn: () => getComments(eventId),
    enabled: false,
  });

  const {
    mutate,
    isLoading: isLoadingPostComment,
    isSuccess: isPostSuccess,
  } = useMutation(postComment);

  useEffect(() => {
    // 댓글 보기 클릭시 데이터 불러오기
    if (showComments || isPostSuccess) refetch();
  }, [showComments, isPostSuccess]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData: PostComment) {
    mutate({ eventId, commentData });
  }

  return (
    <section>
      <button onClick={toggleCommentsHandler}>댓글 {showComments ? "숨기기" : "보기"}</button>
      {showComments && (
        <NewComment
          isLoadingPostComment={isLoadingPostComment}
          addCommentHandler={addCommentHandler}
          isPostSuccess={isPostSuccess}
        />
      )}
      {showComments && !(isLoadingComments || isRefetching) && (
        <CommentList items={data.comments} />
      )}
      {showComments && (isLoadingComments || isRefetching) && <Loading />}
      {isError && <p>댓글 로딩 에러!</p>}
    </section>
  );
}

export default Comments;
