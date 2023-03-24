import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "calc(100vh - 32.5rem - 75px)" }}>
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
