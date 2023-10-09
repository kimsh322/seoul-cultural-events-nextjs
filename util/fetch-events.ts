import axios from "axios";
import { GetNextPageParamFunction } from "@tanstack/react-query";

// 모든 events get 함수
export async function getAllEvents() {
  const total = 12;
  const response = await axios.get(
    `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_CULTURAL_EVENTS_AUTHORIZE}/json/culturalEventInfo/1/${total}/`
  );
  return response.data;
}

// event 하나 fetch하는 함수

export async function getEvent(eventId: string) {
  try {
    const response = await axios.get(
      `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_CULTURAL_EVENTS_AUTHORIZE}/json/culturalEventInfo/${eventId}/${eventId}/`
    );
    return response.data;
  } catch (error) {
    return "요청에 문제가 발생했습니다.";
  }
}

// 무한스크롤 콜백함수
export async function getScrollEvents({ pageParam = 12 }) {
  try {
    const response = await axios.get(
      `http://openapi.seoul.go.kr:8088/${
        process.env.NEXT_PUBLIC_CULTURAL_EVENTS_AUTHORIZE
      }/json/culturalEventInfo/${pageParam - 11}/${pageParam}/`
    );
    return response.data;
  } catch (error) {
    return "요청에 문제가 발생했습니다.";
  }
}

// 다음 페이지 계산하는 콜백함수
export const getNextPageParam: GetNextPageParamFunction = (_, allPage) => {
  const nextPage = (1 + allPage.length) * 12;
  if (nextPage > 1000) return false;
  return nextPage;
};
