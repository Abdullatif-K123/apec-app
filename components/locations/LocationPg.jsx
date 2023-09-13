import React from "react";
import BottomSec from "../UI/BottomSec";
import location from "../../public/assets/icons/location.png";
import doted from "../../public/assets/jpg&png/doted.png";
import { useRouter } from "next/router";
import arrowLeft from "/public/assets/jpg&png/backArrowRed.png";
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

  return (
    <div className="homeMain location">
      <Image src={doted} width={250} height={200} className="dotedLocation" />
      <div className="headSection">
        <h3>Sayrafa 1$={dataHome.prices.currency_rate}</h3>
      </div>

      <div className="productBody servicesBody locationBody">
        <div className="headStation">
          <Image
            src={arrowLeft}
            width={40}
            height={40}
            className="backArrowStatoin"
            onClick={() => router.back()}
          />
          <h2>STATIONS</h2>
        </div>
        <div className="locationMenu">
          {dataLocatoin.map((station) => {
            const isLocationUrl = station.url_site.startsWith("https://");

            return (
              <Link
                key={station._id}
                href={`${
                  isLocationUrl
                    ? station.url_site
                    : `https://www.google.com/maps/place/${encodeURIComponent(
                        station.url_site
                      )}`
                }`}
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
