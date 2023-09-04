import React from "react";
import BottomSec from "../UI/BottomSec";
import Image from "next/image";
import ApecRounded from "../../public/assets/jpg&png/apecRound.png";
import SmileMarket from "../../public/assets/svg/smileMarketRound.svg";
import doted from "../../public/assets/jpg&png/doted.png";
import { useRouter } from "next/router";

const HomePage = (props) => {
  console.log(props);
  const router = useRouter();
  const whatsApp = props.data ? props.data?.prices.whatsapp_number : null;

  const dataPrices = props.data?.prices;
  return (
    <div className="homeMain">
      <div className="headSection">
        <h3>Sayrafa 1$={dataPrices.currency_rate}</h3>
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
          <section className="fuelPrice">{dataPrices.fuel_price} LBP</section>
        </div>
        <div className="singleFuel">
          <section className="fuelTitle fuelGray">
            <p>Diesel Price</p>
          </section>
          <section className="fuelPrice">{dataPrices.diesel_price} LBP</section>
        </div>
        <Image src={doted} width={300} height={200} className="doted2" />
        <div className="singleFuel">
          <section className="fuelTitle fuelGrayDark">
            <p>Gaz Price</p>
          </section>
          <section className="fuelPrice">{dataPrices.gas_price} LBP</section>
        </div>
      </div>
      <BottomSec whatsAppnum={whatsApp} />
    </div>
  );
};

export default HomePage;
