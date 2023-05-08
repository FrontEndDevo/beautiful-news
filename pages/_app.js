import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
import Loader from "../components/Loader/Loader";
import { useState } from "react";
import { Router } from "next/router";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import { Provider } from "react-redux";
import store, { persistor } from "../store/redux-store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    setIsLoading(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setIsLoading(false);
  });
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
      {isLoading && <Loader />}

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
