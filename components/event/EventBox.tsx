import styled from "@emotion/styled";
import { Event } from "../all-events/event";
import Image from "next/image";
import EventDetail from "./EventDetail";

interface Props {
  event: Event;
}

export default function EventBox({ event }: Props) {
  return (
    <EventBoxContainer>
      <h2>{event.TITLE}</h2>
      <EventContentsContainer>
        <div className="image-box">
          <Image src={event.MAIN_IMG} alt={event.TITLE} fill={true} sizes={"auto"} />
        </div>
        <EventDetail event={event} />
      </EventContentsContainer>
    </EventBoxContainer>
  );
}

const EventBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;
  padding: 1%;
  .image-box {
    width: 40%;
    height: 80vh;
    position: relative;
    object-fit: cover;
  }
`;

const EventContentsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1%;
`;
