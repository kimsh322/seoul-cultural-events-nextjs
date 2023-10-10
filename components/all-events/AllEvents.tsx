import { getScrollEvents, getNextPageParam } from "@/util/fetch-events";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import EventCardsBox from "./EventCardsBox";
import Loading from "../Loading";

export default function AllEvents() {
  const { ref, inView } = useInView();

  // 무한 스크롤 구현
  // prettier-ignore
  const { data, fetchNextPage, error, isError, isFetchingNextPage } = 
  useInfiniteQuery<any, AxiosError>({queryKey: ["events"], queryFn: getScrollEvents, getNextPageParam,suspense : true});

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

  return (
    <>
      <EventCardsBox data={data as InfiniteData<any>} />
      {isFetchingNextPage && <Loading />}
      <div ref={ref} style={{ height: 50 }} />
    </>
  );
}
