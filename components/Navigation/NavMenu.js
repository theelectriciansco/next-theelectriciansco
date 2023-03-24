import React from "react";
import NavItem from "./NavItem";

import navLinks from "../../data/navLinks";

const NavMenu = () => {
  return (
    <nav className="flex-row h-full justify-end pb-6 hidden lg:flex">
      <ul className="flex flex-row list-none justify-between items-end relative">
        {navLinks.map((item, index) => {
          return (
            <NavItem key={index} link={item.path} subMenu={item.subMenu}>
              {item.name}
            </NavItem>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;
