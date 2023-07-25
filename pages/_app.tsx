import Header from "@/components/Header";
import GlobalStyle from "@/styles/GlobalStyle";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }: AppProps) {
  // 렌더링시 새로운 인스턴스 생성
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      {/* AllEvents 페이지에서 StaticProps로 받은 dehydratedState 적용 */}
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
