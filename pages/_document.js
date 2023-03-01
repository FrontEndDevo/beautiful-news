import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          /* There was an attempt to use ReactDOM.createPortals( SideBar ), but
          there were many errors appear like: (referenceerror: document is not
          defined || error: Target container is not a DOM element. nextjs) */
          <div id="aside" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
