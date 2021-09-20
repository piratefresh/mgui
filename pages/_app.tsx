import "@assets/main.css";
import "@assets/chrome-bug.css";
import "keen-slider/keen-slider.min.css";
import type { AppProps } from "next/app";
import { Head } from "@components/common";
import React from "react";

const Noop: React.FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  React.useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);
  return (
    <>
      <Head />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
