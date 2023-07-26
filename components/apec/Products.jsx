import React from "react";

import Image from "next/image";
import BottomSec from "../UI/BottomSec";
import apecWhite from "../../public/assets/svg/apeWhite.svg";
import ProductCard from "../UI/ProductCard";
import backSpaceRed from "../../public/assets/jpg&png/backSpaceWhite.png";
import { useRouter } from "next/router";
const DUMMY_DATA = [
  {
    id: "ewrew324234",
    name: "WINDSCREEN WIPERS",
    description: "Part synthetic engine oil, 1L",
    imgUrl: "",
    price: 5,
  },
  {
    id: "ewrewdsf324234",
    name: "CASTROL LUBES",
    description: "Part synthetic engine oil, 1L",
    types: "5W-30",
    imgUrl: "",
    price: 5,
  },
  {
    id: "ewrew3asdf24234",
    name: "CASTROL LUBES",
    description: "Part synthetic engine oil, 1L",
    types: "5W-40",
    imgUrl: "",
    price: 5,
  },
  {
    id: "ewrew3asdf24234",
    name: "WINDSCREEN WIPERS",
    description: "Part synthetic engine oil, 1L",
    types: "10W-40",
    imgUrl: "",
    price: 5,
  },
];
const Products = ({ backToHome }) => {
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
          {DUMMY_DATA.map((item, index) => {
            return (
              <ProductCard
                key={item.key}
                prdName={item.name}
                prdDesc={item.description}
                prdPrice={item.price}
                prdBrand={item.types}
                prdNum={index}
              />
            );
          })}
        </div>
      </div>
      <BottomSec />
    </div>
  );
};

export default Products;
