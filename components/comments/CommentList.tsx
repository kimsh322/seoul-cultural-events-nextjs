import { Comment } from "./Comments";

interface Props {
  items: Comment[];
}

export default function CommentList({ items }: Props) {
  return (
    <ul>
      {items.map((item: any) => {
        return (
          <li key={item._id}>
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
