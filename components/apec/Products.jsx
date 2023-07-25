import React from "react";

import Image from "next/image";
import BottomSec from "../UI/BottomSec";
import apecWhite from "../../public/assets/svg/apeWhite.svg";
const Products = ({ backToHome }) => {
  return (
    <div className="productsPage">
      <Image src={apecWhite} width={150} height={150} onClick={backToHome} />
      <div className="servicesBody">
        <h2>Products</h2>
      </div>
      <BottomSec />
    </div>
  );
};

export default Products;
