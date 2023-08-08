import React from "react";
import Image from "next/image";
import carWashing from "../../public/assets/jpg&png/carWashing.jpg";
const ServiceCard = (props) => {
  return (
    <div className={`serviceCard ${props.className == 0 ? "serRed" : ""}`}>
      <div className="servicePrice">
        <h3>{props.priceServ}$</h3>
      </div>
      <div className="serviceBodyCard">
        <Image
          src={props.imgServ}
          width={170}
          height={150}
          className="cardServiceImage"
        />
        <div className="serviceDesc">
          <h1>{props.nameServ}</h1>
          <p>{props.descServ}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
