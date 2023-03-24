import Head from "next/head";

import React from "react";

import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Layout/Hero";
import ContactSection from "../../components/Layout/ContactSection";

import heroImage from "../../public/static/images/hero/hero-emergency.png";

const Emergency = () => {
  return (
    <Layout>
      <Head>
        <title>Emergency Services - The Electricians</title>
        <meta
          name="description"
          content="Electrical problems are no joke! The Electricians CO are on call 24/7, 365 days a year for quick, safe and reliable repairs."
        />
      </Head>
      <Hero
        imageUrl={heroImage}
        title="Emergency Services Available 24/7"
        text={
          <span>
            Operators are standing by. Give us a call at{" "}
            <a className="underline" href="tel:7207123010">
              720-712-3010
            </a>
          </span>
        }
        mobileBtn
      />
      <ContactSection text="Electrical problems are no joke! The Electricians CO are on call 24/7, 365 days a year for quick, safe and reliable repairs." />
    </Layout>
  );
};

export default Emergency;
