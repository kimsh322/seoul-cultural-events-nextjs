import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import type { Event } from "./event.js";
import Link from "next/link.js";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

interface EventCardProps {
  event: Event;
  eventId: number;
}

export default function EventCard({ event, eventId }: EventCardProps) {
  // 클릭한 위치 기억
  const setScrollY = () => {
    const windowY = window.scrollY;
    console.log(windowY);
    sessionStorage.setItem("scrollY", String(windowY));
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link href={`/events/${eventId}`} onClick={setScrollY}>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <CardMedia sx={{ pt: "56.25%", position: "relative" }}>
            <LazyLoadImage
              style={{ objectFit: "cover", position: "absolute", top: 0, left: 0 }}
              width="100%"
              height="100%"
              src={event.MAIN_IMG}
              alt={event.TITLE}
              effect="opacity"
            />
          </CardMedia>
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
    </Grid>
  );
}
