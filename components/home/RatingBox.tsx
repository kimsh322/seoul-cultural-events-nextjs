import { Box, Container } from "@mui/material";
import { UseQueryResult } from "@tanstack/react-query";
import { Event } from "../all-events/event";
import EventCard from "../all-events/EventCard";

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
      <Box
        sx={{
          width: 1,
          height: 400,
          display: "flex",
          overflowX: "scroll",
          backgroundColor: "primary.dark",
        }}
      >
        {events.map((event, idx) => {
          return <EventCard key={event.TITLE} event={event} eventId={idx + 1} />;
        })}
      </Box>
    </Container>
  );
}
