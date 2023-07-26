import React from "react";
import Image from "next/image";
import BottomSec from "../UI/BottomSec";
import apecRed from "../../public/assets/svg/apecRed.svg";
import { useRouter } from "next/router";
import backSpaceRed from "../../public/assets/jpg&png/backArrowRed.png";
import ServiceCard from "../UI/ServiceCard";
const DUMMY_DATA = [
  {
    id: 3223234,
    serviceName: "CAR WACHING",
    description: "amazing car washing for your car",
    imageURL: "https://djeifjldskf.com",
    price: 5,
  },
  {
    id: 3223234,
    serviceName: "CAR WACHING",
    description: "amazing car washing for your car",
    imageURL: "https://djeifjldskf.com",
    price: 5,
  },
  {
    id: 3223234,
    serviceName: "CAR WACHING",
    description: "amazing car washing for your car",
    imageURL: "https://djeifjldskf.com",
    price: 5,
  },
  {
    id: 3223234,
    serviceName: "CAR WACHING",
    description: "amazing car washing for your car",
    imageURL: "https://djeifjldskf.com",
    price: 5,
  },
  {
    id: 3223234,
    serviceName: "CAR WACHING",
    description: "amazing car washing for your car",
    imageURL: "https://djeifjldskf.com",
    price: 5,
  },
];
const Services = ({ backToHome }) => {
  const router = useRouter();
  return (
    <div className="servicesMain">
      <Image
        src={backSpaceRed}
        width={50}
        height={50}
        className=" backspaceArrowTop"
        onClick={backToHome}
      />
      <Image
        src={apecRed}
        width={150}
        height={100}
        onClick={() => {
          router.push("/");
        }}
      />
      <div className="servicesBody">
        <h1>SERVICES</h1>
        <div className="serviceMenu">
          {DUMMY_DATA.map((serv, index) => {
            return (
              <ServiceCard
                key={serv.id}
                className={index}
                nameServ={serv.serviceName}
                imgServ={serv.imageURL}
                descServ={serv.description}
                priceServ={serv.price}
              />
            );
          })}
        </div>
      </div>
      <BottomSec red={"red"} />
    </div>
  );
};

export default Services;
