import styled from "@emotion/styled";
import { Event } from "../home/event";

interface Props {
  event: Event;
}

export default function EventDetail({ event }: Props) {
  return (
    <EventDetailContainer>
      <div className="grid-box">
        <div>분류 : {event.CODENAME}</div>
        <div>출연 : {event.PLAYER}</div>
        <div>지역 : {event.GUNAME}</div>
        <div>장소 : {event.PLACE}</div>
      </div>
      <span className="line">기간 : {event.DATE}</span>
      <span className="line">신청일 : {event.RGSTDATE}</span>
      <span className="line">이용요금 : {event.USE_FEE}</span>
      <a href={event.ORG_LINK} target="_blank">
        자세히보기
      </a>
    </EventDetailContainer>
  );
}

const EventDetailContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  padding: 2%;
  font-size: 1.3em;
  .grid-box {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px 0;
    margin-bottom: 5%;
  }
  .line {
    margin-bottom: 5%;
  }
`;
