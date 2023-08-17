import React from "react";
import HomePage from "@/components/home/HomePage";
import { fetchDataHome } from "./api/fetchHome";
const index = ({ data }) => {
  return <HomePage data={data} />;
};
export async function getServerSideProps() {
  const data = await fetchDataHome();
  return {
    props: {
      data,
    },
  };
}
export default index;
