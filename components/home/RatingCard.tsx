import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import { Event } from "../all-events/event";

interface EventCardProps {
  event: Event;
  eventId: number;
}

export default function RatingCard({ event, eventId }: EventCardProps) {
  return (
    <Box sx={{ mx: "10px" }}>
      <Link href={`/events/${eventId}`}>
        <Card sx={{ width: 300, height: "100%", display: "flex", flexDirection: "column" }}>
          <CardMedia component="div" sx={{ pt: "56.25%" }} image={event.MAIN_IMG} />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom component="h2" sx={{ fontWeight: 700 }}>
              {event.TITLE}
            </Typography>
            <Typography variant="body2">{event.DATE}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">더보기</Button>
          </CardActions>
        </Card>
      </Link>
    </Box>
  );
}
