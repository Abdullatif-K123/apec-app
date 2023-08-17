import React from "react";
import BottomSec from "../UI/BottomSec";
import location from "../../public/assets/icons/location.png";
import doted from "../../public/assets/jpg&png/doted.png";
import { useRouter } from "next/router";
import locationWhite from "../../public/assets/icons/locationWhite.png";
import Link from "next/link";
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
const LocationPg = ({ data, dataHome }) => {
  const router = useRouter();
  const dataLocatoin = data.branches;
  console.log(dataHome);
  return (
    <div className="homeMain location">
      <Image src={doted} width={250} height={200} className="dotedLocation" />
      <div className="headSection">
        <h3>Sayrafa 1$={dataHome.prices.currency_rate}</h3>
      </div>
      <div className="productBody servicesBody locationBody">
        <h2>STATIONS</h2>
        <div className="locationMenu">
          {dataLocatoin.map((station) => {
            return (
              <Link
                key={station._id}
                href={`https://www.google.com/maps/place/${station.url_site}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="singlStation" key={station.id}>
                  <Image src={location} width={55} height={50} alt="location" />
                  <p>{station.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <BottomSec whatsAppnum={dataHome.prices.whatsapp_number} />
    </div>
  );
};

export default LocationPg;
