import { Box, List, ListItem, Typography } from "@mui/material";
import { Comment } from "./Comments";

interface Props {
  items: Comment[];
}

export default function CommentList({ items }: Props) {
  return (
    <List sx={{ width: 1, px: 2 }}>
      {items.toReversed().map((item: Comment) => {
        const parsingDate = new Date(item.date).toLocaleString("ko-kr");
        return (
          <ListItem
            alignItems="flex-start"
            divider
            key={item._id.toString()}
            sx={{ display: "flex", flexDirection: "column", py: 2 }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", width: 1 }}>
              <Typography sx={{ mb: 2 }}>{item.nickname}</Typography>
              <Typography>{parsingDate}</Typography>
            </Box>
            <pre>{item.comment}</pre>
          </ListItem>
        );
      })}
    </List>
  );
}
