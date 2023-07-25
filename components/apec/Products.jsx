import React from "react";

import Image from "next/image";
import BottomSec from "../UI/BottomSec";
import apecWhite from "../../public/assets/svg/apeWhite.svg";
import { useRouter } from "next/router";
const Products = ({ backToHome }) => {
  const router = useRouter();
  return (
    <div className="productsPage">
      <Image
        src={apecWhite}
        width={150}
        height={100}
        onClick={() => {
          router.push("/");
        }}
      />
      <div className="servicesBody">
        <h2>Products</h2>
      </div>
      <BottomSec />
    </div>
  );
};

export default Products;
