import type { AppProps } from "next/app";

import "styles/globals.css";
import Header from "components/Header";
import Footer from "components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

// blogs at: https://www.lvepartners.com/author/luihnfood/

export default MyApp;
