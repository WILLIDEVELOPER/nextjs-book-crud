import { Fragment } from "react";
import Header from "../components/header";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
}
