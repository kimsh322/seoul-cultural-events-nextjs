import { useEffect, useRef } from "react";
import Loading from "../Loading";

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

export default function NewComment({
  addCommentHandler,
  isLoadingPostComment,
  isPostSuccess,
}: Props) {
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  // post요청 성공시 input태그 초기화
  useEffect(() => {
    if (isPostSuccess) {
      if (nicknameInputRef.current !== null) nicknameInputRef.current.value = "";
      if (commentInputRef.current !== null) commentInputRef.current.value = "";
      if (passwordInputRef.current !== null) passwordInputRef.current.value = "";
    }
  }, [isPostSuccess]);

  function sendCommentHandler(event: React.FormEvent) {
    event.preventDefault();
    let enteredNickname = "";
    let enteredComment = "";
    let enteredPassword = "";
    if (nicknameInputRef.current !== null) enteredNickname = nicknameInputRef.current.value;
    if (commentInputRef.current !== null) enteredComment = commentInputRef.current.value;
    if (passwordInputRef.current !== null) enteredPassword = passwordInputRef.current.value;

    addCommentHandler({
      nickname: enteredNickname,
      comment: enteredComment,
      password: enteredPassword,
    });
  }

  return (
    <>
      <form onSubmit={sendCommentHandler}>
        <div>
          <div>
            <label htmlFor="email">Nickname</label>
            <input id="nickname" ref={nicknameInputRef} />
          </div>
          <div>
            <label htmlFor="name">password</label>
            <input type="text" id="password" ref={passwordInputRef} />
          </div>
        </div>
        <div>
          <label htmlFor="comment">Your comment</label>
          <textarea id="comment" rows={5} ref={commentInputRef}></textarea>
        </div>
        <button>Submit</button>
      </form>
      {isLoadingPostComment && <Loading />}
    </>
  );
}
