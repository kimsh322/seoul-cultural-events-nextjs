import { GetServerSideProps } from "next";
import RatingBox from "./RatingBox";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { getLatestEvents } from "@/util/fetch-events";
import Footer from "../Footer";
import { Box, Container, CssBaseline, Typography } from "@mui/material";

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
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              서울시 문화행사 정보
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              서울시에서 진행하는 문화행사에 대한 정보입니다.
            </Typography>
          </Container>
        </Box>
        <RatingBox ratingName={ratingName} data={latestQuery} />
      </main>
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
