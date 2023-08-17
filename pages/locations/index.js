import React from "react";
import LocationPg from "@/components/locations/LocationPg";
import { fetchDataLocation } from "../api/fetchLocation";
import { fetchDataHome } from "../api/fetchHome";
const index = ({ data, dataHome }) => {
  return <LocationPg data={data} dataHome={dataHome} />;
};
export async function getStaticProps() {
  const data = await fetchDataLocation();
  const dataHome = await fetchDataHome();
  return {
    props: {
      data,
      dataHome,
    },
  };
}
export default index;
