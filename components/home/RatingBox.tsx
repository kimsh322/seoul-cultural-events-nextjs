import { Box, Container } from "@mui/material";
import { UseQueryResult } from "@tanstack/react-query";
import Loading from "../Loading";
import { Event } from "../all-events/event";
import EventCard from "../all-events/EventCard";

interface Props {
  ratingName: string;
  data: UseQueryResult<any>;
}

const RatingBox = ({ ratingName, data }: Props) => {
  if (data.isError) return <div>에러 발생</div>;
  if (data.status === "loading") return <Loading />;
  const events = data.data.culturalEventInfo.row as Event[];
  return (
    <Container sx={{ paddingTop: "20px" }}>
      <Box>{ratingName}</Box>
      <Box
        sx={{
          width: 1,
          height: 400,
          display: "flex",
          backgroundColor: "primary.dark",
        }}
      >
        {events.map((event, idx) => {
          return <EventCard key={event.TITLE} event={event} eventId={idx + 1} />;
        })}
      </Box>
    </Container>
  );
};

export default RatingBox;
