import React from "react";
import Image from "next/image";
const ProductCard = ({
  prdName,
  prdDesc,
  prdPrice,
  prdBrand,
  prdNum,
  prdImg,
}) => {
  return (
    <div className="productCardMain">
      <Image
        src={prdImg}
        width={70}
        height={90}
        className="imagProduct"
        alt="product Img"
      />
      <div className="prdCardDesc">
        <h3>{prdName}</h3>
        <h4>{prdBrand}</h4>
        <p>{prdDesc ? prdDesc.slice(0, 30) : ""}</p>
      </div>
      <div className="prdCardPrice">
        <h3>{prdPrice}$</h3>
      </div>
    </div>
  );
};

export default ProductCard;
