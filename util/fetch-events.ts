import axios from "axios";

// 모든 events get 함수
export async function getAllEvents() {
  const total = 12;
  const response = await axios.get(
    `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_CULTURAL_EVENTS_AUTHORIZE}/json/culturalEventInfo/1/${total}/`
  );
  return response.data;
}

// 무한스크롤 콜백함수
export async function getScrollEvents({ pageParam = 12 }) {
  const response = await axios.get(
    `http://openapi.seoul.go.kr:8088/${
      process.env.NEXT_PUBLIC_CULTURAL_EVENTS_AUTHORIZE
    }/json/culturalEventInfo/${pageParam - 11}/${pageParam}/`
  );
  return response.data;
}

// event 하나 fetch하는 함수

export async function getEvent(eventId: string) {
  const response = await axios.get(
    `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_CULTURAL_EVENTS_AUTHORIZE}/json/culturalEventInfo/${eventId}/${eventId}/`
  );
  return response.data;
}
