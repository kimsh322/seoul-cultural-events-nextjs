import axios from "axios";

export async function getEvents() {
  const response = await axios.get(
    `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_CULTURAL_EVENTS_AUTHORIZE}/json/culturalEventInfo/1/5/`
  );
  return response.data;
}
