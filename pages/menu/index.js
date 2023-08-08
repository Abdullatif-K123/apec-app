import React from "react";
import MenuHome from "@/components/smileMarket/MenuHome";
import { fetchMarket } from "../api/fetchMarket";
const index = ({ data }) => {
  return <MenuHome data={data} />;
};

export async function getServerSideProps() {
  const data = await fetchMarket();
  return {
    props: {
      data,
    },
  };
}
export default index;
