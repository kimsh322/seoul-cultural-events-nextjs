import { getEvents } from "@/util/get-events";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import EventCard from "./EventCard";
import { Box } from "@mui/material";

export default function AllEvents() {
  // 캐싱된 데이터를 useQuery로 필요한 곳에서 가져온다.
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  if (isError) return <div>데이터를 가져오는데 실패했습니다.</div>;

  if (isLoading) return <p>Loading...</p>;

  const eventsArr = data.culturalEventInfo.row;
  return (
    <Box
      sx={{
        display: "grid",
        "grid-template-columns": "repeat(3, 1fr)",
        justifyContent: "center",
        justifyItems: "center",
        marginTop: 2,
      }}
    >
      {eventsArr.map((event: any) => {
        return <EventCard title={event.TITLE} date={event.DATE} img={event.MAIN_IMG} />;
      })}
    </Box>
  );
}

export async function getStaticProps() {
  // 모든 events 데이터 사전 fetching && caching
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["events"], getEvents);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
