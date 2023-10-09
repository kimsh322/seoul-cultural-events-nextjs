import { getAllEvents, getScrollEvents, getNextPageParam } from "@/util/fetch-events";
import { dehydrate, QueryClient, useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import EventCardsBox from "./EventCardsBox";
import Loading from "../Loading";

export default function AllEvents() {
  const { ref, inView } = useInView();

  // 무한 스크롤 구현
  // prettier-ignore
  const { data, fetchNextPage, error, isError, status, isFetchingNextPage } = 
  useInfiniteQuery<any, AxiosError>({queryKey: ["events"], queryFn: getScrollEvents, getNextPageParam});

  useEffect(() => {
    // ref가 view에 들어오면 함수 실행
    if (inView) fetchNextPage();
  }, [inView]);

  // 스크롤 위치 기억
  useEffect(() => {
    const scrollY = sessionStorage.getItem("scrollY") ?? "0";
    if (scrollY !== "0") {
      setTimeout(() => window.scrollTo(0, Number(scrollY)), 300);
      sessionStorage.removeItem("scrollY");
    }
  }, []);

  if (isError) return <div>{error.message}</div>;

  return status === "loading" ? (
    <Loading />
  ) : (
    <>
      <EventCardsBox data={data} />
      {isFetchingNextPage && <Loading />}
      <div ref={ref} style={{ height: 50 }} />
    </>
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
