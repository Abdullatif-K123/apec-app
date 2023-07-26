import React, { useState, useEffect } from "react";

import BottomSec from "../UI/BottomSec";
import Image from "next/image";
import ApecRounded from "../../public/assets/svg/apecRound.svg";
import SmileMarket from "../../public/assets/svg/smileMarketRound.svg";
import { useRouter } from "next/router";

const HomePage = (props) => {
  const router = useRouter();

  return (
    <div className="homeMain">
      <div className="headSection">
        <h3>Sayrafa 1$=80,000</h3>
      </div>
      <div className="cardSection">
        <div
          className="productSection"
          onClick={() => {
            router.push("/product");
          }}
        >
          <Image src={ApecRounded} width={100} height={100} />
          <p>PRODUCT</p>
        </div>
        <div
          className="productSection"
          onClick={() => {
            router.push("/menu");
          }}
        >
          <Image src={SmileMarket} width={100} height={100} />
          <p>MENU</p>
        </div>
      </div>
      <div className="fuelPrices">
        <div className="singleFuel">
          <section className="fuelTitle fuelRed">
            <p>Gazoline Price</p>
          </section>
          <section className="fuelPrice">1,500,000.00 LBP</section>
        </div>
        <div className="singleFuel">
          <section className="fuelTitle fuelGray">
            <p>Diesel Price</p>
          </section>
          <section className="fuelPrice">750,000.00 LBP</section>
        </div>
        <div className="singleFuel">
          <section className="fuelTitle fuelGrayDark">
            <p>Gaz Price</p>
          </section>
          <section className="fuelPrice">1,500,000.00 LBP</section>
        </div>
      </div>
      <BottomSec />
    </div>
  );
};

export default HomePage;
