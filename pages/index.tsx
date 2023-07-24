import AllEvents from "@/components/home/AllEvents";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cultural Events in Seoul</title>
        <meta name="description" content="Cultural Events in Seoul" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AllEvents />
    </>
  );
}
