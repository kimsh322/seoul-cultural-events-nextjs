import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { Event } from "./event.d.ts";
import Link from "next/link.js";

const cardStyle = {
  width: 300,
  margin: 1,
  backgroundColor: "skyblue",
  transition: "all 0.3s",
  "&:hover": {
    backgroundColor: "primary.main",
    transform: "translateY(-10px)",
  },
  cursor: "pointer",
};

interface EventCardProps {
  event: Event;
  eventId: number;
}

export default function EventCard({ event, eventId }: EventCardProps) {
  return (
    <Link href={`/events/${eventId}`}>
      <Card sx={cardStyle}>
        <CardMedia
          component="img"
          height="200"
          image={`${event.MAIN_IMG}`}
          alt={`${event.TITLE}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{ height: 90 }}>
            {event.TITLE}
          </Typography>
          <Typography variant="body2">{event.DATE}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
