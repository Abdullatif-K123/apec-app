import React from "react";
import Image from "next/image";
import smileMarket from "../../public/assets/svg/smileMarket.svg";
import { useRouter } from "next/router";
import backSpaceMarket from "../../public/assets/jpg&png/backArrow.png";

const MenuItems = ({ clickedMenuHandle, data }) => {
  console.log(data);
  const drinksList = data.smile_market[0].products;
  console.log(drinksList);
  const router = useRouter();
  const lastTwoItems = drinksList.slice(drinksList.length - 2);
  return (
    <div className="menuShow">
      <div className="backgroundImages"></div>
      <Image
        src={smileMarket}
        width={180}
        height={90}
        onClick={() => {
          router.push("/");
        }}
      />
      <dir className="menuItems">
        <div className="headMenu">
          <h2>HOT DRINKS</h2>
        </div>
        <div className="bodyMenu">
          {drinksList.map((item, index) => {
            return (
              <>
                {index < drinksList.length - 2 ? (
                  <div className="singleItem" key={index}>
                    <div className="itemTitle">
                      <p>{item.name}</p>
                      <p>{item.description}</p>
                    </div>
                    <p className="itemPrice">{item.price.toFixed(2)}$</p>
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
        <div className="parentTwoItem">
          <div className="lastTwoItem">
            {lastTwoItems.map((item, index) => {
              return (
                <div className="singleItem lastTwo" key={index}>
                  <div className="itemTitle">
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                  </div>
                  <p className="itemPrice lastprice">
                    {item.price.toFixed(2)}$
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </dir>
      <Image
        src={backSpaceMarket}
        width={50}
        height={50}
        className=" backspaceArrowTop"
        onClick={clickedMenuHandle}
      />
    </div>
  );
};

export default MenuItems;
