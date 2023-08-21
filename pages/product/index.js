import React from "react";
import ProductHome from "@/components/apec/ProductHome";
import { fetchAppProduct } from "../api/fetchApecPro";
import { fetchDataHome } from "../api/fetchHome";
const index = ({ data, whatsApp, quote }) => {
  return <ProductHome data={data} whatsApp={whatsApp} quote={quote} />;
};
export async function getServerSideProps() {
  const data = await fetchAppProduct();
  const datahome = await fetchDataHome();
  const whatsApp = datahome.prices.whatsapp_number;
  return {
    props: {
      data,
      whatsApp,
       quote: datahome.prices.apec_quote,
    },
  };
}
export default index;
