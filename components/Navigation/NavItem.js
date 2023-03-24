import Link from "next/link";
import { useRouter } from "next/router";

import React, { useState } from "react";

import SubMenu from "./SubMenu";

const NavItem = (props) => {
  const router = useRouter();

  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const showSubMenuHandler = () => {
    setSubMenuVisible(true);
  };

  const hideSubMenuHandler = () => {
    setSubMenuVisible(false);
  };

  return (
    <li
      className={props.className}
      onMouseLeave={() => {
        hideSubMenuHandler();
      }}
    >
      <Link
        href={props.link}
        onMouseEnter={() => {
          showSubMenuHandler();
        }}
        className={`duration-300 title uppercase p-5 mb-1 text-2xl 
    text-black hover:text-red hover:bg-highlight 
    ${
      router.asPath.indexOf(props.link) > -1 && props.link != "/"
        ? "text-red"
        : router.asPath === "/" && props.link === "/"
        ? "text-red"
        : "text-black"
    } 
    ${
      router.asPath.indexOf(props.link) > -1 && props.link != "/"
        ? "bg-highlight"
        : router.asPath === "/" && props.link === "/"
        ? "bg-highlight"
        : null
    }
    `}
      >
        {props.children}
      </Link>
      {props.subMenu && props.subMenu.length > 0 ? (
        <SubMenu menu={props.subMenu} showSubMenu={subMenuVisible} />
      ) : null}
    </li>
  );
};

export default NavItem;
