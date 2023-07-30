import { getEvent } from "@/util/fetch-events";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function EventDetailPage({
  event,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const eventData = event.culturalEventInfo.row[0];

  return <div>{eventData.TITLE}</div>;
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
