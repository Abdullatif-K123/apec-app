import React, { useState } from "react";
import Image from "next/image";
import smileMarket from "../../public/assets/svg/smileMarket.svg";
import smile from "../../public/assets/svg/smile.svg";
import MenuItems from "./MenuItems";
import { useRouter } from "next/router";
import backSpaceMarket from "../../public/assets/jpg&png/backArrow.png";
const MenuHome = ({ data }) => {
  const router = useRouter();
  const [clickedMenu, setClickedMenu] = useState(false);
  const clickedMenuHandle = () => {
    setClickedMenu(false);
  };
  if (clickedMenu) {
    return <MenuItems clickedMenuHandle={clickedMenuHandle} data={data} />;
  }
  return (
    <div className="menuMain">
      <div className="backgroundImage"></div>
      <Image
        src={smileMarket}
        width={210}
        height={100}
        className="images"
        onClick={() => {
          router.push("/");
        }}
      />
      <Image src={smile} width={195} height={195} />
      <div
        className="menuContainer"
        onClick={() => {
          setClickedMenu(true);
        }}
      >
        MENU
      </div>
      <Image
        src={backSpaceMarket}
        width={50}
        height={50}
        className="backspaceArrowTop"
        alt="back space"
        onClick={() => {
          router.push("/");
        }}
      />
    </div>
  );
};

export default MenuHome;
