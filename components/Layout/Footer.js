import Image from "next/image";
import Link from "next/link";

import React from "react";

import { FaClock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";

import compliassure from "../../public/images/compliAssure.png";
import nextdoorBadge from "../../public/images/DigitalSticker_2022.png";

const Footer = () => {
  return (
    <footer>
      <div className="bg-slate lg:h-96">
        <div className="max-w-sm md:max-w-3xl lg:max-w-7xl mx-auto flex flex-row flex-wrap justify-around lg:justify-between h-full items-start md:gap-x-28 lg:gap-x-0 gap-y-12 px-4 py-12 lg:py-20 lg:px-4">
          <div className="w-full md:w-5/12 lg:w-max flex flex-col justify-center items-center">
            <Image
              src="/images/TheElectricians-logo-white.svg"
              alt="The Electricians CO logo"
              width={285}
              height={188}
            />
          </div>
          <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-5/12 lg:w-max">
            <span className="text-white uppercase title text-3xl">About</span>
            <div className="flex flex-col items-start gap-6 w-full">
              <div className="flex flex-row gap-4 text-white items-center">
                <FaClock size={28} color="#a52837" />
                <span className="text-lg font-medium">Open 24/7</span>
              </div>
              <div className="flex flex-row gap-4 text-white items-center">
                <FaPhoneAlt size={28} color="#a52837" />
                <a href="tel:7207123010">
                  <span className="text-lg font-medium">720-712-3010</span>
                </a>
              </div>
              {/* <div className="flex flex-row gap-4 text-white items-center">
                <FaEnvelope size={28} color="#a52837" />
                <a href="mailto:info@theelectriciansco.com">
                  <span className="text-lg font-medium">
                    Info@TheElectriciansCO.com
                  </span>
                </a>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-5/12 lg:w-max">
            <span className="text-white uppercase title text-3xl">
              Services
            </span>
            <div className="flex flex-col items-start gap-6 w-full">
              <div className="flex flex-row gap-4 text-white items-center">
                <FaHome size={28} color="#a52837" />
                <Link href="/services/residential/">
                  <span className="text-lg font-medium">Residential</span>
                </Link>
              </div>
              <div className="flex flex-row gap-4 text-white items-center">
                <FaBuilding size={28} color="#a52837" />
                <Link href="/services/commercial/">
                  <span className="text-lg font-medium">Commercial</span>
                </Link>
              </div>
              <div className="flex flex-row gap-4 text-white items-center">
                <IoIosWarning size={28} color="#a52837" />
                <Link href="/services/emergency">
                  <span className="text-lg font-medium">Emergencies</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-5/12 lg:w-max">
            <span className="text-white uppercase title text-3xl">Connect</span>
            <div className="flex flex-col items-start gap-6 w-full">
              <div className="flex flex-row gap-4 text-white items-center">
                <FaMapMarkerAlt size={28} color="#a52837" />
                <a
                  href="https://g.page/TheElectriciansCO"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-lg font-medium">Our Location</span>
                </a>
              </div>
              <div className="flex flex-row gap-4 text-white items-center">
                <FaFacebookF size={28} color="#a52837" />
                <a
                  href="https://www.fb.com/theelectriciansllc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-lg font-medium">Facebook</span>
                </a>
              </div>

              <div className="flex flex-row gap-4 text-white items-center">
                <Image
                  src="/images/nextdoor-icon.svg"
                  alt="nextdoor icon"
                  width={28}
                  height={28}
                  style={{
                    filter:
                      "invert(17%) sepia(96%) saturate(2201%) hue-rotate(336deg) brightness(88%) contrast(87%)",
                  }}
                />
                <a
                  href="https://nextdoor.com/pages/the-electricians-parker-co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-lg font-medium">Nextdoor</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate">
        <div className="max-w-sm md:max-w-3xl lg:max-w-7xl mx-auto flex flex-row flex-wrap justify-center md:justify-between lg:justify-around h-full items-center  md:gap-x-28 lg:gap-x-0 gap-y-12 px-8 pb-12 lg:pb-12 lg:px-4">
          <div className="bg-white p-2 mt-4 rounded-lg">
            <Image src={compliassure} alt="CompliAssure logo" height={80} />
          </div>
          <a
            href="https://nextdoor.com/pages/the-electricians-parker-co/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={nextdoorBadge}
              alt="Nextdoor Accolade"
              width={200}
              height={200}
            />
          </a>
        </div>
      </div>
      <div className="bg-black h-14">
        <div className="flex justify-center items-center h-full text-center">
          <span className="text-white">
            © {new Date().getFullYear()} The Electricians CO | All Rights
            Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
