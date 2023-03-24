const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about/",
    subMenu: [
      {
        name: "Testimonials",
        path: "/about/reviews/",
      },
      {
        name: "Meet The Team",
        path: "/about/meet-the-team/",
      },
      {
        name: "Service Areas",
        path: "/about/service-areas/",
      },
    ],
  },
  {
    name: "Services",
    path: "/services/",
    subMenu: [
      {
        name: "Residential",
        path: "/services/residential/",
      },
      {
        name: "Commercial",
        path: "/services/commercial/",
      },
      {
        name: "Emergency",
        path: "/services/emergency/",
      },
    ],
  },
  {
    name: "Contact",
    path: "/contact-us/",
  },
];

export default navLinks;
