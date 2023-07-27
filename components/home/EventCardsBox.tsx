import { Box } from "@mui/material";
import { InfiniteData } from "@tanstack/react-query";
import EventCard from "./EventCard";

const boxStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  justifyContent: "center",
  justifyItems: "center",
  marginTop: 2,
};

interface Props {
  data: InfiniteData<any>;
}

export default function EventCardsBox({ data }: Props) {
  return (
    <Box sx={boxStyle}>
      {/* 무한 스크롤 렌더링, 이중 배열 구조로 되어있다. */}
      {data.pages.map((group) => {
        return group.culturalEventInfo.row.map((event: any) => {
          return (
            <EventCard
              key={event.TITLE}
              title={event.TITLE}
              date={event.DATE}
              img={event.MAIN_IMG}
            />
          );
        });
      })}
    </Box>
  );
}
