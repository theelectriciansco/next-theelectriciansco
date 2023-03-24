import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";

import NavMenu from "../Navigation/NavMenu";
import SideNavMenu from "../Navigation/SideNavMenu";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";

import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const router = useRouter();

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [drawerIsClosing, setDrawerIsClosing] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const openDrawer = () => {
    setDrawerIsClosing(false);
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsClosing(true);
    const drawerTimer = setInterval(() => {
      setDrawerIsOpen(false);
      clearInterval(drawerTimer);
    }, 270);
  };

  // Prevent scrolling behind sidedrawer when open
  useEffect(() => {
    drawerIsOpen && (document.documentElement.style.overflow = "hidden");
    drawerIsOpen && (document.body.style.paddingRight = "0px");
    !drawerIsOpen && (document.documentElement.style.overflow = "unset");
    !drawerIsOpen && (document.body.style.paddingRight = "0");
  }, [drawerIsOpen]);

  // Check window scroll position
  useEffect(() => {
    const handleScroll = () => {
      typeof window !== "undefined" && setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reset scroll position on navigation change
  useEffect(() => {
    setScrollY(0);
  }, [router.query.slug]);

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      <SideDrawer
        show={drawerIsOpen}
        close={closeDrawer}
        isClosing={drawerIsClosing}
      >
        <SideNavMenu />
      </SideDrawer>
      <header>
        {/* Mobile Header */}
        <div className="bg-slate lg:hidden flex flex-col items-center py-2">
          <span className="text-white text-center">
            SERVING DENVER AND SURROUNDING AREAS
          </span>
          <span className="text-white text-center">
            24/7 EMERGENCY SERVICES AVAILABLE
          </span>
        </div>
        <div className="lg:hidden flex flex-row border-red bg-red border-b-4 justify-between px-4 py-4 z-40">
          <a href="tel:7206335937">
            <FaPhoneAlt color="#fff" size={42} />
          </a>
          <Link href="/contact-us/">
            <GrMail color="#fff" size={46} />
          </Link>
          <div onClick={openDrawer}>
            <GiHamburgerMenu color="#fff" size={46} />
          </div>
        </div>
        <div
          className={` flex-row border-red bg-red border-b-4 justify-between px-4 py-4 z-40 ${
            scrollY > 64 ? "fixed w-full top-0 flex lg:hidden " : "hidden"
          }`}
        >
          <a href="tel:7206335937">
            <FaPhoneAlt color="#fff" size={42} />
          </a>
          <Link href="/contact-us/">
            <GrMail color="#fff" size={46} />
          </Link>
          <div onClick={openDrawer}>
            <GiHamburgerMenu color="#fff" size={46} />
          </div>
        </div>
        {/* Desktop Header */}
        <div className="bg-slate hidden lg:block">
          <div
            className={`max-w-7xl mx-auto py-3 px-4 flex flex-row justify-between font-medium text-lg items-center`}
          >
            <span className="text-white">AVAILABLE 24/7</span>
            <span className="text-white">
              SERVING DENVER AND SURROUNDING AREAS
            </span>
            <div className="flex flex-row items-center">
              <FaPhoneAlt color="#fff" />
              <a href="tel:7207123010" className="text-white pl-1">
                720-712-3010
              </a>
            </div>
            <Link
              className="text-white rounded-lg border border-white px-2 py-1 hover:text-red hover:bg-white duration-300"
              href="/contact-us/"
            >
              SCHEDULE SERVICE
            </Link>
          </div>
        </div>
        <div className="bg-white border-b-4 border-red h-36">
          <div className="max-w-7xl mx-auto flex flex-row h-36 px-4">
            <div className="w-full">
              <Link href="/">
                <Image
                  className="pt-6 relative mx-auto z-30 lg:absolute"
                  src="/images/TEC-logo.svg"
                  alt="The Electricians logo"
                  width={290}
                  height={240}
                  priority
                />
              </Link>
              <NavMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
