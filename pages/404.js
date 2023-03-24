import Head from "next/head";

import React from "react";

import Layout from "../components/Layout/Layout";
import Container from "../components/Layout/Container";

const NotFound = () => {
  return (
    <Layout>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <Container>
        <div
          className="flex flex-col justify-center items-center"
          style={{ minHeight: "calc(100vh - 32.5rem - 60px)" }}
        >
          <h1 className="font-bold text-6xl title uppercase pb-8 pt-32 lg:pt-0 text-center">
            404 - Page Not Found
          </h1>
          <p className="font-semibold text-2xl text-center pb-12">
            {"Sorry, we couldn't find what you're looking for."}
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default NotFound;
