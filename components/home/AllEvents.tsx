import { getEvents } from "@/util/get-events";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

export default function AllEvents() {
  const { data } = useQuery({ queryKey: ["posts"], queryFn: getEvents });
  console.log(data);
  if (!data) return <div>로딩중</div>;
  return <div>여기데이터</div>;
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["events"], getEvents);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
