import React from "react";
import Image from "next/image";
import apecWhite from "../../public/assets/svg/apeWhite.svg";
import doted from "../../public/assets/jpg&png/doted.png";
const LoadingPage = () => {
  return (
    <div className="loadingMain">
      <Image src={doted} width={250} height={200} className="doted" />
      <div className="bodyContainer">
        <div className="textContainer">
          <h2 className="animationText">
            WELCOME <br />
            TO
          </h2>

          <Image
            src={apecWhite}
            width={120}
            height={80}
            className="animationText"
          />
        </div>
      </div>
      <p dir="rtl" className="animationTexts">
        طاقة لبكرا !
      </p>
    </div>
  );
};

export default LoadingPage;
