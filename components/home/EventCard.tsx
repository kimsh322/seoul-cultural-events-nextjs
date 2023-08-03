import { Card, CardContent, Typography } from "@mui/material";
import type { Event } from "./event.d.ts";
import Link from "next/link.js";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

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
        <LazyLoadImage
          style={{ objectFit: "cover" }}
          width="300"
          height="200"
          src={event.MAIN_IMG}
          alt={event.TITLE}
          effect="opacity"
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
