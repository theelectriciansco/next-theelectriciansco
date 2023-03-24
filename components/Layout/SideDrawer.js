import React from "react";
import { createPortal } from "react-dom";

import Link from "next/link";
import Image from "next/image";

import { IoCloseSharp } from "react-icons/io5";

const SideDrawer = (props) => {
  return props.show
    ? createPortal(
        <div
          className={
            props.isClosing
              ? "fixed right-0 top-0 z-50 h-screen max-w-xs w-full bg-white shadow duration-300 overflow-y-hidden sidedrawer-slide-out"
              : props.show
              ? "fixed right-0 top-0 z-50 h-screen max-w-xs w-full bg-white shadow duration-300 overflow-y-hidden sidedrawer-slide-in"
              : "fixed right-0 top-0 z-50 h-screen max-w-xs w-full bg-white shadow duration-300 overflow-y-hidden"
          }
        >
          <div className="flex flex-col px-5 pt-5 pb-0 overflow-y-auto h-full">
            <div className="flex flex-row justify-end">
              <IoCloseSharp
                className="hover:cursor-pointer"
                size={28}
                color={"#000"}
                onClick={props.close}
              />
            </div>
            {/* <div className={styles["side__drawer__logo__container"]}>
              <Link href="/" passRef>
                <a>
                  <Image
                    className={styles["side__drawer__logo"]}
                    src="/images/logos/san-francisco-digital-marketing-agency_color.svg"
                    alt="RSO Consulting logo"
                    width={200}
                    height={125}
                  />
                </a>
              </Link>
            </div> */}
            {props.children}
          </div>
        </div>,
        document.getElementById("drawer-hook")
      )
    : null;
};

export default SideDrawer;
