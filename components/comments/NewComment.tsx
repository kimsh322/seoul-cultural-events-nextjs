import { ChangeEvent, useEffect, useState } from "react";
import Loading from "../Loading";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

export interface PostComment {
  nickname: string;
  comment: string;
  password: string;
}

interface Props {
  addCommentHandler: (commentData: PostComment) => void;
  isLoadingPostComment: boolean;
  isPostSuccess: boolean;
}

interface Tag {
  [key: string]: string;
}

export default function NewComment({ addCommentHandler, isLoadingPostComment, isPostSuccess }: Props) {
  const initialValue = { nickname: "", password: "", comment: "" };
  const [inputValue, setInputValue] = useState(initialValue);

  // post요청 성공시 input태그 초기화
  useEffect(() => {
    if (isPostSuccess) setInputValue(initialValue);
  }, [isPostSuccess]);

  const tag: Tag = { 닉네임: "nickname", 비밀번호: "password", 댓글: "comment" };
  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const newObj = { ...inputValue, [tag[name]]: value };
    setInputValue(newObj);
  };

  function sendCommentHandler(event: React.FormEvent) {
    event.preventDefault();
    const { nickname, password, comment } = inputValue;
    addCommentHandler({ nickname, comment, password });
  }

  return (
    <>
      <Box component="form" onSubmit={sendCommentHandler} sx={{ mt: 3, mb: 5, px: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="닉네임"
              required
              fullWidth
              id="nickname"
              label="닉네임"
              autoFocus
              value={inputValue.nickname}
              onChange={onChange}
              sx={{ bgcolor: "#fff" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="password"
              label="댓글 비밀번호(최대 6자)"
              name="비밀번호"
              value={inputValue.password}
              onChange={onChange}
              inputProps={{ maxLength: 6 }}
              sx={{ bgcolor: "#fff" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="comment"
              label="댓글"
              name="댓글"
              multiline
              rows={4}
              value={inputValue.comment}
              onChange={onChange}
              sx={{ bgcolor: "#fff" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>* 비밀번호는 댓글 수정 및 삭제에 사용됩니다.</Typography>
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, bgcolor: "#445D48" }}>
          댓글 작성
        </Button>
      </Box>
      {isLoadingPostComment && <Loading />}
    </>
  );
}
