import React from "react";
import whatsApp from "../../public/assets/jpg&png/whatsApp.webp";
import whatsAppWhite from "../../public/assets/svg/whatsappWhite.svg";
import location from "../../public/assets/icons/location.png";
import locationWhite from "../../public/assets/icons/locationWhite.png";
import Image from "next/image";
const BottomSec = ({ red }) => {
  return (
    <div className="bottomSection">
      <i className={`singleIcon ${red ? "redIcon" : ""}`}>
        <Image src={red ? whatsAppWhite : whatsApp} width={35} height={35} />
      </i>
      <i className={`singleIcon ${red ? "redIcon" : ""}`}>
        <Image src={red ? locationWhite : location} width={35} height={35} />
      </i>
      <div className={`download ${red ? "redIcon" : ""}`}>
        <h3>Download</h3>
        <p>our company profile</p>
      </div>
    </div>
  );
};

export default BottomSec;
