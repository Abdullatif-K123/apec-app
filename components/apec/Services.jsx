import React from "react";
import Image from "next/image";
import BottomSec from "../UI/BottomSec";
import apecRed from "../../public/assets/svg/apecRed.svg";
import { useRouter } from "next/router";
const Services = ({ backToHome }) => {
  const router = useRouter();
  return (
    <div className="servicesMain">
      <Image
        src={apecRed}
        width={150}
        height={100}
        onClick={() => {
          router.push("/");
        }}
      />
      <div className="servicesBody">
        <h2>SERVICES</h2>
      </div>
      <BottomSec red={"red"} />
    </div>
  );
};

export default Services;
