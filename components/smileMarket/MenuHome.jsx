import React, { useState } from "react";
import Image from "next/image";
import smileMarket from "../../public/assets/svg/smileMarket.svg";
import smile from "../../public/assets/svg/smile.svg";
import MenuItems from "./MenuItems";
const MenuHome = () => {
  const [clickedMenu, setClickedMenu] = useState(false);
  const clickedMenuHandle = () => {
    setClickedMenu(false);
  };
  if (clickedMenu) {
    return <MenuItems clickedMenuHandle={clickedMenuHandle} />;
  }
  return (
    <div className="menuMain">
      <Image src={smileMarket} width={210} height={210} className="images" />
      <Image src={smile} width={195} height={195} />
      <div
        className="menuContainer"
        onClick={() => {
          setClickedMenu(true);
        }}
      >
        MENU
      </div>
    </div>
  );
};

export default MenuHome;
