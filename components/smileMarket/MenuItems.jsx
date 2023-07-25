import React from "react";
import Image from "next/image";
import smileMarket from "../../public/assets/svg/smileMarket.svg";

const DUMMY_DATA = [
  { name: "Espresso", price: 1 },
  { name: "Double Espresso", price: 1 },
  { name: "Nesscafe", price: 1 },
  {
    name: "Nesscafe special",
    secondary: "Big Cup, nestle and Nescafe",
    price: 1,
  },
  {
    name: "Cappuccino",
    secondary: "Coffee, nestle and milk",
    price: 1,
  },
  { name: "Caffe Aux Lait", price: 1 },
  { name: "Nesscafe", price: 1 },
  {
    name: "Moccachino",
    secondary: "Coffee, cacao, nestle and milk",
    price: 1,
  },

  {
    name: "Moccachino",
    secondary: "Coffee, cacao, nestle and milk",
    price: 1,
  },
  {
    name: "Service",
    secondary: "Cup, hot water",
    price: 1,
  },
  {
    name: "Extra Service",
    secondary: "Extra service",
    price: 1,
  },
];
const MenuItems = ({ clickedMenuHandle }) => {
  const lastTwoItems = DUMMY_DATA.slice(DUMMY_DATA.length - 2);
  return (
    <div className="menuShow">
      <Image
        src={smileMarket}
        width={180}
        height={100}
        onClick={clickedMenuHandle}
      />
      <dir className="menuItems">
        <div className="headMenu">
          <h2>HOT DRINKS</h2>
        </div>
        <div className="bodyMenu">
          {DUMMY_DATA.map((item, index) => {
            return (
              <>
                {index < DUMMY_DATA.length - 2 ? (
                  <div className="singleItem" key={index}>
                    <div className="itemTitle">
                      <p>{item.name}</p>
                      <p>{item.secondary}</p>
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
                    <p>{item.secondary}</p>
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
    </div>
  );
};

export default MenuItems;
