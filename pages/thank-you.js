import Head from "next/head";

import React from "react";

import Layout from "../components/Layout/Layout";
import Hero from "../components/Layout/Hero";

import heroImage from "../public/static/images/hero/hero-thank-you.png";

const ThankYou = () => {
  return (
    <Layout>
      <Head>
        <title>Thank You! - The Electricians</title>
        <meta
          name="description"
          content="Thank you for submitting your message. We'll get back to you shortly."
        />
      </Head>
      <Hero
        imageUrl={heroImage}
        title="Thank You"
        text="Your message has been submitted. We will be in touch with you shortly."
      />
    </Layout>
  );
};

export default ThankYou;
