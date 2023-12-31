import React from "react";
import BottomSec from "../UI/BottomSec";
import Image from "next/image";
import ApecRounded from "../../public/assets/jpg&png/apecRound.png";
import SmileMarket from "../../public/assets/svg/smileMarketRound.svg";
import doted from "../../public/assets/jpg&png/doted.png";
import { useRouter } from "next/router";
import formatThousands from "format-thousands";
const HomePage = (props) => {
  const router = useRouter();
  const whatsApp = props.data ? props.data?.prices.whatsapp_number : null;
  const dataPrices = props.data?.prices;
  const pricingCurrency = formatThousands(parseFloat(dataPrices.currency_rate));
  const fuelPrice = formatThousands(parseFloat(dataPrices.fuel_price));
  const dieselPrice = formatThousands(parseFloat(dataPrices.diesel_price));
  const gasPrice = formatThousands(parseFloat(dataPrices.gas_price));

  return (
    <div className="homeMain">
      <div className="headSection">
        <h3>Sayrafa 1$={pricingCurrency}</h3>
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
          <section className="fuelPrice">{fuelPrice} LBP</section>
        </div>
        <div className="singleFuel">
          <section className="fuelTitle fuelGray">
            <p>Diesel Price</p>
          </section>
          <section className="fuelPrice">{dieselPrice} LBP</section>
        </div>
        <Image src={doted} width={300} height={200} className="doted2" />
        <div className="singleFuel">
          <section className="fuelTitle fuelGrayDark">
            <p>Gaz Price</p>
          </section>
          <section className="fuelPrice">{gasPrice} LBP</section>
        </div>
      </div>
      <BottomSec whatsAppnum={whatsApp} />
    </div>
  );
};

export default HomePage;
