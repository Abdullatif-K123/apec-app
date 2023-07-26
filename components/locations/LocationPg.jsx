import React from "react";
import BottomSec from "../UI/BottomSec";
import location from "../../public/assets/icons/location.png";
import doted from "../../public/assets/jpg&png/doted.png";
import locationWhite from "../../public/assets/icons/locationWhite.png";
import Image from "next/image";
const DUMMY_DATA = [
  { id: 32423423, name: "El Mina" },
  { id: 32423423, name: "El BADAWI" },
  { id: 32423423, name: "El Miten" },
  { id: 32423423, name: "Azmi" },
  { id: 32423423, name: "El Mina" },
  { id: 32423423, name: "El BADAWI" },
  { id: 32423423, name: "El Miten" },
  { id: 32423423, name: "Azmi" },
];
const LocationPg = () => {
  return (
    <div className="homeMain location">
      <div className="headSection">
        <h3>Sayrafa 1$=80,000</h3>
      </div>
      <div className="productBody servicesBody locationBody">
        <h2>STATIONS</h2>
        <div className="locationMenu">
          {DUMMY_DATA.map((station) => {
            return (
              <div className="singlStation" key={station.id}>
                <Image src={location} width={55} height={50} />
                <p>{station.name}</p>
              </div>
            );
          })}
        </div>
        <Image src={doted} width={250} height={200} className="dotedLocation" />
      </div>
      <BottomSec />
    </div>
  );
};

export default LocationPg;
