import { ChangeEvent, useEffect, useState } from "react";
import Loading from "../Loading";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import StarRating from "./StarRating";

export interface PostComment {
  nickname: string;
  comment: string;
  password: string;
  rating: number;
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
  const [rating, setRating] = useState(0);
  const [inputValue, setInputValue] = useState(initialValue);

  // post요청 성공시 input태그 초기화
  useEffect(() => {
    if (isPostSuccess) {
      setInputValue(initialValue);
      setRating(0);
    }
  }, [isPostSuccess]);

  const tag: Tag = { 닉네임: "nickname", 비밀번호: "password", 코멘트: "comment" };
  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const newObj = { ...inputValue, [tag[name]]: value };
    setInputValue(newObj);
  };

  function sendCommentHandler(event: React.FormEvent) {
    event.preventDefault();
    const { nickname, password, comment } = inputValue;
    addCommentHandler({ nickname, comment, password, rating });
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
              label="리뷰 비밀번호(최대 6자)"
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
              label="코멘트"
              name="코멘트"
              multiline
              rows={4}
              value={inputValue.comment}
              onChange={onChange}
              sx={{ bgcolor: "#fff" }}
            />
          </Grid>
          <Grid item xs={12}>
            <StarRating rating={rating} setRating={setRating} />
          </Grid>
          <Grid item xs={12}>
            <Typography>* 비밀번호는 리뷰 수정 및 삭제에 사용됩니다.</Typography>
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, bgcolor: "#445D48" }}>
          리뷰 작성
        </Button>
      </Box>
      {isLoadingPostComment && <Loading />}
    </>
  );
}
