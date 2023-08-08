import React from "react";
import Image from "next/image";
import BottomSec from "../UI/BottomSec";
import apecRed from "../../public/assets/svg/apecRed.svg";
import { useRouter } from "next/router";
import backSpaceRed from "../../public/assets/jpg&png/backArrowRed.png";
import ServiceCard from "../UI/ServiceCard";

const Services = ({ backToHome, services, whatsApp }) => {
  const router = useRouter();
  return (
    <div className="servicesMain">
      <Image
        src={backSpaceRed}
        width={50}
        height={50}
        className=" backspaceArrowTop"
        onClick={backToHome}
        alt="back space"
      />
      <Image
        src={apecRed}
        width={150}
        height={100}
        onClick={() => {
          router.push("/");
        }}
        alt="logo ic"
      />
      <div className="servicesBody">
        <h1>SERVICES</h1>
        <div className="serviceMenu">
          {services.map((serv, index) => {
            return (
              <ServiceCard
                key={serv.id}
                className={index}
                nameServ={serv.name}
                imgServ={serv.image_url}
                descServ={serv.description}
                priceServ={serv.price}
              />
            );
          })}
        </div>
      </div>
      <BottomSec red={"red"} whatsAppnum={whatsApp} />
    </div>
  );
};

export default Services;
