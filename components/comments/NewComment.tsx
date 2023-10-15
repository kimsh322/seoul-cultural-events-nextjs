import { useRef } from "react";

export interface PostComment {
  nickname: string;
  comment: string;
  password: string;
}

interface Props {
  addCommentHandler: (commentData: PostComment) => void;
}

export default function NewComment({ addCommentHandler }: Props) {
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

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
  );
}
