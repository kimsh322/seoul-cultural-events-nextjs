import { GetServerSideProps } from "next";
import RatingBox from "./RatingBox";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { getLatestEvents } from "@/util/fetch-events";
import Footer from "../Footer";
import { CssBaseline } from "@mui/material";
import HomeView from "./HomeView";

export default function HomePage() {
  const ratingName = "최신순";
  const latestQuery = useQuery({
    queryKey: ["latest"],
    queryFn: getLatestEvents,
    suspense: true,
  });

  return (
    <>
      <CssBaseline />
      <HomeView />
      <RatingBox ratingName={ratingName} data={latestQuery} />
      <RatingBox ratingName={ratingName} data={latestQuery} />
      <RatingBox ratingName={ratingName} data={latestQuery} />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // 첫 화면에서 보여줄 events 데이터 사전 fetching
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["latest"], getLatestEvents);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
