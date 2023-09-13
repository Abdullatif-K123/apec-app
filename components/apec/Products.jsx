import React from "react";
import Image from "next/image";
import BottomSec from "../UI/BottomSec";
import apecWhite from "../../public/assets/svg/apeWhite.svg";
import ProductCard from "../UI/ProductCard";
import backSpaceRed from "../../public/assets/jpg&png/backSpaceWhite.png";
import { useRouter } from "next/router";
const Products = ({ backToHome, products, whatsApp }) => {
  const router = useRouter();
  return (
    <div className="productsPage">
      <Image
        src={backSpaceRed}
        width={50}
        height={50}
        className=" backspaceArrowTop"
        onClick={backToHome}
      />
      <Image
        src={apecWhite}
        width={150}
        height={100}
        onClick={() => {
          router.push("/");
        }}
      />
      <div className="productBody servicesBody">
        <h2>PRODUCTS</h2>
        <div className="productMenu">
          {products.map((item, index) => {
            return (
              <ProductCard
                key={item.id}
                prdName={item.name}
                prdDesc={item.description}
                prdPrice={item.price}
                prdBrand={item.types}
                prdImg={item.image_url}
                prdNum={index}
              />
            );
          })}
        </div>
      </div>
      <BottomSec whatsAppnum={whatsApp} />
    </div>
  );
};

export default Products;
