import React, { useState } from "react";
import Image from "next/image";
import apecRed from "../../public/assets/svg/apecRed.svg";
import BottomSec from "../UI/BottomSec";
import carWatshing from "../../public/assets/jpg&png/carWashing.jpg";
import Services from "./Services";
import Products from "./Products";
const ProductHome = () => {
  const [clickHandler, setClickHandler] = useState("");
  const backToHome = () => {
    setClickHandler("");
  };
  if (clickHandler === "services") {
    return <Services backToHome={backToHome} />;
  }
  if (clickHandler === "products") {
    return <Products backToHome={backToHome} />;
  }
  return (
    <div className="productMain">
      <Image src={apecRed} width={150} height={150} />
      <div className="typeProduct">
        <div className="smallCardLeft">
          <Image src={carWatshing} width={130} height={130} />
        </div>
        <div
          className="bigCard"
          onClick={() => {
            setClickHandler("services");
          }}
        >
          <h2>SERIVCES</h2>
          <p>
            Our serivces is the best <br />
            serivces you can Imagin
          </p>
        </div>
      </div>
      <div className="typeProduct">
        <div
          className="bigCard cardDown"
          onClick={() => {
            setClickHandler("products");
          }}
        >
          <h2>PRODUCTS</h2>
          <p>
            Our serivces is the best <br />
            serivces you can Imagin
          </p>
        </div>
        <div className="smallCardRight">
          <Image src={carWatshing} width={130} height={130} />
        </div>
      </div>
      <BottomSec red={"red"} />
    </div>
  );
};

export default ProductHome;
