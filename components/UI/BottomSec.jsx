import React, { useEffect, useState } from "react";
import whatsApp from "../../public/assets/jpg&png/whatsApp.webp";
import whatsAppWhite from "../../public/assets/svg/whatsappWhite.svg";
import location from "../../public/assets/icons/location.png";
import locationWhite from "../../public/assets/icons/locationWhite.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { downloadPDF } from "@/pages/api/fetchPdf";
const BottomSec = ({ red, whatsAppnum }) => {
  const handleClick = () => {
    console.log("clicking");
    downloadPDF();
  };
  //handling whatsApp refer to specific number
  const handleWhatsAppClick = () => {
    const message = "Hello, to APEC how we can help you?";
    const url = `https://wa.me/${whatsAppnum}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  const router = useRouter();

  return (
    <div className="bottomSection">
      <i
        className={`singleIcon ${red ? "redIcon" : ""}`}
        onClick={handleWhatsAppClick}
      >
        <Image src={red ? whatsAppWhite : whatsApp} width={35} height={35} />
      </i>
      <i
        className={`singleIcon ${red ? "redIcon" : ""}`}
        onClick={() => {
          router.push("/locations");
        }}
      >
        <Image src={red ? locationWhite : location} width={35} height={35} />
      </i>
      <div className={`download ${red ? "redIcon" : ""}`} onClick={handleClick}>
        <h3>Download</h3>
        <p>our company profile</p>
      </div>
    </div>
  );
};

export default BottomSec;
