import { getAllEvents, getEvents } from "@/util/fetch-events";
import { dehydrate, QueryClient, useInfiniteQuery } from "@tanstack/react-query";
import EventCard from "./EventCard";
import { Box } from "@mui/material";
import { AxiosError } from "axios";
import { useRef } from "react";
import { useObserver } from "@/hooks/useObserver";

export default function AllEvents() {
  const bottom = useRef<HTMLDivElement>(null);
  // 무한 스크롤 구현
  const { data, fetchNextPage, error, isError, status } = useInfiniteQuery<any, AxiosError>({
    queryKey: ["events"],
    queryFn: getEvents,
    getNextPageParam: (_, allPage) => {
      // 다음 페이지 계산
      const nextPage = (1 + allPage.length) * 12;
      if (nextPage > 1000) return false;
      return nextPage;
    },
  });

  const observed: IntersectionObserverCallback = ([entry]) =>
    entry.isIntersecting && fetchNextPage();

  useObserver({ target: bottom, callback: observed });

  if (isError) return <div>{error.message}</div>;

  if (status === "loading") return <p>Loading...</p>;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        justifyContent: "center",
        justifyItems: "center",
        marginTop: 2,
      }}
    >
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
      <div ref={bottom} />
      <button onClick={() => fetchNextPage()}>더 불러오기</button>
    </Box>
  );
}

export async function getStaticProps() {
  // 첫 화면에서 보여줄 일부 events 데이터 사전 fetching
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["events"], getAllEvents);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
