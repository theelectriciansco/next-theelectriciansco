import Link from "next/link";

import React from "react";

const SubMenu = (props) => {
  return (
    <div
      className={
        props.showSubMenu
          ? "opacity-100 w-auto h-auto duration-300 absolute z-30 bg-white block drop-shadow-md"
          : "opacity-0 h-0 w-0 z-0 hidden"
      }
      style={{ top: props.showSubMenu ? "calc(100% + 18px)" : null }}
    >
      <ul
        className="flex flex-col items-start list-none pl-0 pb-0 w-60"
        aria-label="submenu"
      >
        {props.menu.map((subLink, key) => (
          <li
            key={key}
            className="flex items-start px-3 py-4 w-full duration-300 hover:bg-highlight "
          >
            <Link href={subLink.path} className="title uppercase text-2xl ">
              {subLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
