import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

import { store } from "@/provider/store";

import "@/assets/scss/globals.scss";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      {/* <meta charset="utf-8" /> */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      {/* A brief description of the page  */}
      <meta name="description" content="Weather website" />
      {/* Disconnects the formation of a link by the phone number on iOS */}
      {/* <meta name="format-detection" content="telephone=no" /> */}
      {/* Key words of the page  */}
      <meta name="keywords" content="weather" />
      {/* Search robots access control to the page */}
      {/* <meta name="robots" content="" /> */}
      {/* The author of the page */}
      <meta name="author" content="Maksydenko" />
      {/* Copyright */}
      <meta name="copyright" content="Maksydenko" />
      {/* The address of the author */}
      <meta name="address" content="Kyiv, Ukraine" />
      {/* Card type, summary is used by default */}
      <meta name="twitter:card" content="summary" />
      {/* Page name */}
      <meta name="twitter:title" content="Weather" />
      {/* Page description */}
      <meta name="twitter:description" content="Weather website" />
      {/* System on the image */}
      <meta
        name="twitter:image"
        content="https://raw.githubusercontent.com/Maksydenko/weather/master/public/weather.png"
      />
      {/* Site localization */}
      <meta property="og:locale" content="en_US" />
      {/* Site localization, for the Ukrainian-language site uk_UA */}
      <meta property="og:locale:alternate" content="uk_UA" />
      {/* Type of content */}
      <meta property="og:type" content="website" />
      {/* The title of the page that will be displayed in the recording of the social network */}
      <meta property="og:title" content="Weather" />
      {/* Page description */}
      <meta property="og:description" content="Weather website" />
      {/* Link to the image that will be published in the recording */}
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/Maksydenko/weather/master/public/weather.png"
      />
      <meta property="og:image:alt" content="Weather" />
      {/* Link to the current page */}
      <meta
        property="og:url"
        content="https://weather-maksydenko.vercel.app/"
      />
      {/* Name of the site */}
      <meta property="og:site_name" content="Weather" />
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
);

export default App;
