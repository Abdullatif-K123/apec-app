import React from "react";
import HomePage from "@/components/home/HomePage";
const index = ({ data }) => {
  return <HomePage data={data} />;
};
export async function getStaticProps() {
  const data = {
    x: "abdullatif",
    y: "Khayat",
  };
  return {
    props: {
      data,
    },
  };
}
export default index;
