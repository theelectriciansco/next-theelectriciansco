import Link from "next/link";

import React from "react";

const SideNavMenu = () => {
  return (
    <nav className="flex flex-col">
      <Link
        href="/"
        className="title uppercase text-2xl py-2 border-slate border-b-2"
      >
        Home
      </Link>
      <Link
        href="/about/"
        className="title uppercase text-2xl py-2 border-slate border-b-2"
      >
        About Us
      </Link>
      <Link
        href="/about/reviews/"
        className="title uppercase text-2xl py-2 ml-8 border-slate border-b-2"
      >
        Testimonials
      </Link>
      <Link
        href="/about/meet-the-team/"
        className="title uppercase text-2xl py-2 ml-8 border-slate border-b-2"
      >
        Meet The Team
      </Link>
      <Link
        href="/about/service-areas/"
        className="title uppercase text-2xl py-2 pl-8 border-slate border-b-2"
      >
        Service Areas
      </Link>

      <Link
        href="/services/"
        className="title uppercase text-2xl py-2 border-slate border-b-2"
      >
        Services
      </Link>
      <Link
        href="/services/residential/"
        className="title uppercase text-2xl py-2 ml-8 border-slate border-b-2"
      >
        Residential
      </Link>
      <Link
        href="/services/commercial/"
        className="title uppercase text-2xl py-2 ml-8 border-slate border-b-2"
      >
        Commercial
      </Link>
      <Link
        href="/services/emergency/"
        className="title uppercase text-2xl py-2 pl-8 border-slate border-b-2"
      >
        Emergency
      </Link>
      <Link
        href="/contact-us/"
        className="title uppercase text-2xl py-2 border-slate border-b-2"
      >
        Contact Us
      </Link>
    </nav>
  );
};

export default SideNavMenu;
