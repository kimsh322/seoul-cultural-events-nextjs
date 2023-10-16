import { Box, Rating, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface Props {
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
}

export default function StarRating({ rating, setRating }: Props) {
  return (
    <Box component="section" sx={{ display: "flex", alignItems: "center", pl: 1 }}>
      <Typography sx={{ mr: 2 }}>별점</Typography>
      <Rating precision={0.5} value={rating} onChange={(e, value) => setRating(value ?? 0)} />
      <Typography sx={{ ml: 2 }}>{rating}</Typography>
    </Box>
  );
}
