import { Event } from "../all-events/event";
import { Button, Grid } from "@mui/material";

interface Props {
  event: Event;
}

export default function EventDetail({ event }: Props) {
  const eventInfo = [
    ["출연", event.PLAYER],
    ["대상", event.USE_TRGT],
    ["분류", event.CODENAME],
    ["장소", event.PLACE],
    ["이용요금", event.USE_FEE],
    ["기간", event.DATE],
    ["프로그램 설명", event.PROGRAM],
  ];

  return (
    <Grid item xs={6}>
      <Grid container sx={{ pt: 3, pb: 5 }} spacing={2}>
        {eventInfo.map((eventItem) => {
          return (
            <Grid key={eventItem[0]} item xs={12} sx={{ fontSize: "1.5rem" }}>
              {eventItem[1] && `${eventItem[0]} : ${eventItem[1]}`}
            </Grid>
          );
        })}
      </Grid>
      <Button variant="contained" sx={{ bgcolor: "#001524" }} href={event.ORG_LINK} target="_blank" size="large">
        자세히 보러가기
      </Button>
    </Grid>
  );
}
