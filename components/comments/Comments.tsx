import { useEffect, useState } from "react";
import NewComment, { PostComment } from "./NewComment";
import CommentList from "./CommentList";
import { ObjectId } from "mongodb";
import Loading from "../Loading";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getComments, postComment } from "@/util/comment-util";
import { Box, Button } from "@mui/material";

export interface Comment extends PostComment {
  eventId: string;
  _id: ObjectId;
  date: string;
}

interface Props {
  title: string;
}

function Comments({ title }: Props) {
  const [showComments, setShowComments] = useState(false);

  const {
    isLoading: isLoadingComments,
    isRefetching,
    data,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["comments", title],
    queryFn: () => getComments(title),
    enabled: false,
  });

  const { mutate, isLoading: isLoadingPostComment, isSuccess: isPostSuccess } = useMutation(postComment);

  useEffect(() => {
    // 리뷰 보기 클릭시, 리뷰 생성 성공시 데이터 불러오기
    if (showComments || isPostSuccess) refetch();
  }, [showComments, isPostSuccess]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData: PostComment) {
    mutate({ title, commentData });
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Button color="success" variant="outlined" sx={{ mt: 3, mb: 2, px: 5 }} onClick={toggleCommentsHandler}>
        리뷰 {showComments ? "숨기기" : "보기"}
      </Button>
      {showComments && (
        <NewComment
          isLoadingPostComment={isLoadingPostComment}
          addCommentHandler={addCommentHandler}
          isPostSuccess={isPostSuccess}
        />
      )}
      {showComments && isRefetching && <Loading />}
      {showComments && !isLoadingComments && <CommentList items={data.comments} />}
      {showComments && isLoadingComments && <Loading />}
      {isError && <p>리뷰 로딩 에러!</p>}
    </Box>
  );
}

export default Comments;
