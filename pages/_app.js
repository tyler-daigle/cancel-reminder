import "../styles/globals.css";
import AppContextProvider from "store/AppContext";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
