import React from "react";
import Image from "next/image";
import smileMarket from "../../public/assets/svg/smileMarket.svg";
import { useRouter } from "next/router";
import backSpaceMarket from "../../public/assets/jpg&png/backArrow.png";

const MenuItems = ({ clickedMenuHandle, data }) => {
  const router = useRouter();

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
        className="smileImages"
      />
      <dir className="menuItems">
        {data.smile_market.map((singleMenu) => {
          const drinksList = singleMenu.products;
          const lastTwoItems = drinksList.slice(drinksList.length - 2);
          return (
            <>
              {" "}
              <div className="headMenu">
                <h2>{singleMenu.name}</h2>
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
                          <p>{item ? item.description.slice(0, 50) : ""}</p>
                        </div>
                        <p className="itemPrice lastprice">
                          {item.price.toFixed(2)}$
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
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
