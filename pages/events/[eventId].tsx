import EventBox from "@/components/event/EventBox";
import { Event } from "@/components/home/event";
import { getEvent } from "@/util/fetch-events";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function EventDetailPage({
  event,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //에러처리
  if (typeof event === "string") return <div>{event}</div>;

  const eventData: Event = event.culturalEventInfo.row[0];

  return <EventBox event={eventData} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const eventId = context.params?.eventId;
  let eventData;
  if (typeof eventId === "string") eventData = await getEvent(eventId);
  return {
    props: {
      event: eventData,
    },
  };
};
