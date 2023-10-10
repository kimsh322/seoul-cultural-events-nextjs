import { Container, Grid } from "@mui/material";
import { InfiniteData } from "@tanstack/react-query";
import EventCard from "./EventCard";
import type { Event } from "./event";

interface Props {
  data: InfiniteData<any>;
}

export default function EventCardsBox({ data }: Props) {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {/* 무한 스크롤 렌더링, 이중 배열 구조로 되어있다. */}
        {data.pages.map((group, page) => {
          return group.culturalEventInfo.row.map((event: Event, idx: number) => {
            let eventId = page * 12 + idx + 1; // event 번호 계산
            return <EventCard key={event.TITLE} event={event} eventId={eventId} />;
          });
        })}
      </Grid>
    </Container>
  );
}
