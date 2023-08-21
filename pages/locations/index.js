import React from "react";
import LocationPg from "@/components/locations/LocationPg";
import { fetchDataLocation } from "../api/fetchLocation";
import { fetchDataHome } from "../api/fetchHome";
const index = ({ data, dataHome, quote }) => {
  return <LocationPg data={data} dataHome={dataHome}  quote={quote} />;
};
export async function getServerSideProps() {
  const data = await fetchDataLocation();
  const dataHome = await fetchDataHome();
  return {
    props: {
      data,
      dataHome,
      quote: dataHome.prices.apec_quote,
    },
  };
}
export default index;
