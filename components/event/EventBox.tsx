import { Event } from "../all-events/event";
import EventDetail from "./EventDetail";
import { CardMedia, Container, Grid, Typography } from "@mui/material";

interface Props {
  event: Event;
}

export default function EventBox({ event }: Props) {
  return (
    <Container sx={{ pt: 5 }}>
      <Typography component="h4" variant="h4" align="center" sx={{ pb: 5 }}>
        {event.TITLE}
      </Typography>
      <Grid container spacing={2} columns={10}>
        <Grid item xs={4}>
          <CardMedia
            component="div"
            sx={{
              width: "350px",
              height: "500px",
            }}
            image={event.MAIN_IMG}
          />
        </Grid>
        <EventDetail event={event} />
      </Grid>
    </Container>
  );
}
