import { Comment } from "./Comments";

interface Props {
  items: Comment[];
}

export default function CommentList({ items }: Props) {
  return (
    <ul>
      {items.toReversed().map((item: Comment) => {
        return (
          <li key={item._id.toString()}>
            <p>{item.comment}</p>
            <div>
              <address>By {item.nickname}</address>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
