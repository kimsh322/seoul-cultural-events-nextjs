import { Box, Container } from "@mui/material";
import { UseQueryResult } from "@tanstack/react-query";
import { Event } from "../all-events/event";
import RatingCard from "./RatingCard";

interface Props {
  ratingName: string;
  data: UseQueryResult<any>;
}

export default function RatingBox({ ratingName, data }: Props) {
  if (data.isError) return <div>에러 발생</div>;
  const events = data.data.culturalEventInfo.row as Event[];
  return (
    <Container sx={{ paddingTop: "20px" }}>
      <Box>{ratingName}</Box>
      <Box sx={{ width: 1, height: 350, display: "flex", overflowX: "scroll" }}>
        {events.map((event, idx) => {
          return <RatingCard key={event.TITLE} event={event} eventId={idx + 1} />;
        })}
      </Box>
    </Container>
  );
}
