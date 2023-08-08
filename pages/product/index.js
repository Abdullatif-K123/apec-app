import React from "react";
import ProductHome from "@/components/apec/ProductHome";
import { fetchAppProduct } from "../api/fetchApecPro";
const index = ({ data }) => {
  return <ProductHome data={data} />;
};
export async function getServerSideProps() {
  const data = await fetchAppProduct();
  return {
    props: {
      data,
    },
  };
}
export default index;
