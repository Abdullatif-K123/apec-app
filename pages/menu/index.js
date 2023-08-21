import React from "react";
import MenuHome from "@/components/smileMarket/MenuHome";
import { fetchMarket } from "../api/fetchMarket";
import { fetchDataHome } from "../api/fetchHome";
const index = ({ data, quote}) => {
  return <MenuHome data={data} quote={quote}/>;
};

export async function getServerSideProps() {
  const data = await fetchMarket();
    const dataHome = await fetchDataHome();
  return {
    props: {
      data,
      quote: dataHome.prices.apec_quote,
    },
  };
}
export default index;
