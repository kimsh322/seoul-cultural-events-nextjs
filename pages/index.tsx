import Head from "next/head";
import HomePage from "@/components/home/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cultural Events in Seoul</title>
        <meta name="description" content="Cultural Events in Seoul" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomePage />
    </>
  );
}
