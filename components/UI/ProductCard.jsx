import React from "react";
import Image from "next/image";
import casBlue from "../../public/assets/svg/casBlue.svg";
import wipeSc from "../../public/assets/svg/wipeScreen.svg";
import castGold from "../../public/assets/svg/castGold.svg";
import castGold2 from "../../public/assets/svg/castGold2.svg";
const ProductCard = ({ prdName, prdDesc, prdPrice, prdBrand, prdNum }) => {
  return (
    <div className="productCardMain">
      <Image
        src={
          prdNum == 0
            ? wipeSc
            : prdNum == 1
            ? castGold
            : prdNum == 2
            ? castGold2
            : casBlue
        }
        width={110}
        height={130}
        className="imagProduct"
      />
      <div className="prdCardDesc">
        <h3>{prdName}</h3>
        <h4>{prdBrand}</h4>
        <p>{prdDesc}</p>
      </div>
      <div className="prdCardPrice">
        <h3>{prdPrice}$</h3>
      </div>
    </div>
  );
};

export default ProductCard;
