import Header from "@/components/Header";
import GlobalStyle from "@/styles/GlobalStyle";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Loading from "@/components/Loading";

export default function App({ Component, pageProps }: AppProps) {
  // 렌더링시 새로운 인스턴스 생성
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle />
        <Header />
        <Suspense fallback={<Loading />}>
          <Component {...pageProps} />
        </Suspense>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
