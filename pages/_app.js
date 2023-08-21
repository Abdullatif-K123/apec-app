import React, { useState, useEffect } from "react";
import LoadingPage from "../components/home/LoadingPage";
import "@/styles/globals.css";
import "@fontsource/montserrat/800.css";
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const { quote } = pageProps;
  
  console.log("I'm here");
  console.log(quote)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, [3000]);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <LoadingPage quote={quote} />;
  }
  return (
    <>
      <Component {...pageProps} />{" "}
    </>
  );
}
