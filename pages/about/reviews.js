import Head from "next/head";
import Script from "next/script";

import React from "react";

import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Layout/Hero";
import Container from "../../components/Layout/Container";
import ContactSection from "../../components/Layout/ContactSection";
import Button from "../../components/UI/Buttons/Button";

import heroImage from "../../public/static/images/hero/hero-reviews.png";

const Reviews = () => {
  return (
    <Layout>
      <Head>
        <title>
          {"Customer Reviews - The Electricians - Denver Metro's Electrician"}
        </title>
        <meta
          name="description"
          content="We take our work seriously and want you to be happy. We value your business and feedback. Here’s what some of our other customers say about our work."
        />
      </Head>
      <Hero imageUrl={heroImage} title="Testimonials" />
      <Container>
        <Script
          src="https://msgsndr.com/js/reviews_widget.js"
          strategy="lazyOnload"
        />

        <iframe
          id="msgsndr_reviews"
          src="https://msgsndr.com/reviews/get_widget/CuN6LeqV5iq7ZMWCWguc"
          frameBorder="0"
          scrolling="no"
          style={{ minWidth: "100%", width: "100%" }}
        ></iframe>
        <div className="text-center pb-12">
          <Button
            text="Write a Review"
            url="https://search.google.com/local/writereview?placeid=ChIJV7LSIPOPbIcRJVNX_bPNO4s"
          />
        </div>
      </Container>
      <ContactSection />
    </Layout>
  );
};

export default Reviews;
