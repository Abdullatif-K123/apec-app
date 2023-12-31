import React, { useEffect, useState } from "react";
import whatsApp from "../../public/assets/svg/whatsApp.svg";
import whatsAppWhite from "../../public/assets/svg/whatsappWhite.svg";
import location from "../../public/assets/icons/location.png";
import locationWhite from "../../public/assets/icons/locationWhite.png";
import Image from "next/image";
import { useRouter } from "next/router";
import useDownloader from "react-use-downloader";
const BottomSec = ({ red, whatsAppnum }) => {
  const { size, elapsed, percentage, download, error, isInProgress } =
    useDownloader();
  const url = "https://dashboard.apec.com.lb/api/setting/download/pdfBrochure";

  //handling whatsApp refer to specific number
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsAppnum}`;
    window.open(url, "_blank");
  };
  const router = useRouter();

  return (
    <div className="bottomNotification">
      {" "}
      {isInProgress ? (
        <div className="notification">
          {" "}
          <label for="file" className={`${red ? "redText" : ""}`}>
            Downloading :{" "}
          </label>
          <progress id="file" value={percentage} max="100" />
        </div>
      ) : null}
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
        <div
          className={`download ${red ? "redIcon" : ""}`}
          onClick={() => download(url, "Apec-cp.pdf")}
        >
          <h3>Download</h3>
          <p>our company profile</p>
        </div>
      </div>
    </div>
  );
};

export default BottomSec;
