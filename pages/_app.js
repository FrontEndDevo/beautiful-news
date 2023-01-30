import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        // Global Metadata (Title, Description and favicon-icon)
        <title>Beautiful News</title>
        <meta
          name="description"
          content="Our site includes all types of news like political, judicial, entertainment, sports and more. We present a continuous flow of links to articles organized from thousands of publishers and magazines."
        />
        <link
          rel="shortcut icon"
          href="https://i.postimg.cc/1t8Z3bF7/icon.png"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  )
}

export default MyApp;
