import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import React from "react";

import Layout from "../components/Layout/Layout";
import Hero from "../components/Layout/Hero";
import SectionTitle from "../components/Layout/SectionTitle";
import CircuitBgSection from "../components/Layout/ImageBgSection";
import ContactSection from "../components/Layout/ContactSection";
import Container from "../components/Layout/Container";

import { FaHome } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";

import heroImage from "../public/static/images/hero/hero-home.png";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>
          The Electricians: Residential And Commercial Electrical Services
        </title>
        <meta
          name="description"
          content="At The Electricians, our goal is to provide you with everything your need to ensure the safe operation of all your electrical systems."
        />
      </Head>
      <Hero
        imageUrl={heroImage}
        title="Serving Denver and the Surrounding Areas 24/7"
        btn
        mobileBtn
      />
      <Container>
        <p className="text-center text-lg font-semibold mx-auto py-8">
          Electrons are invisible, potent, pesky little particles that may help
          you, bite you, or cause catastrophic failures if allowed. We’re here
          to make sure they’re helping YOU! We’ve spent our lives studying,
          installing, and containing electricity because…well, we appreciate the
          power and like the challenges.
        </p>
      </Container>
      <SectionTitle>Services</SectionTitle>
      <CircuitBgSection>
        <div className="flex flex-col lg:flex-row gap-12 py-12 mx-auto">
          <Link
            href="/services/residential/"
            className="bg-red flex-1  drop-shadow-md p-8 rounded-2xl max-w-5xl lg:max-w-sm hover:scale-105 duration-300"
          >
            <div className="flex flex-col pb-4 items-center">
              <FaHome color="#fff" size={72} />
              <span className="title text-white uppercase text-2xl text-center">
                Residential
              </span>
            </div>
            <p className="text-white text-lg text-center">
              Our residential customers include homeowners, real estate agents,
              and “Do-It-Yourselfers” who need real-life YouTube support.
            </p>
          </Link>
          <Link
            href="/services/commercial/"
            className="bg-red flex-1  drop-shadow-md p-8 rounded-2xl max-w-5xl lg:max-w-sm hover:scale-105 duration-300"
          >
            <div className="flex flex-col pb-4 items-center">
              <FaBuilding color="#fff" size={72} />
              <span className="title text-white uppercase text-2xl text-center">
                Commercial
              </span>
            </div>
            <p className="text-white text-lg text-center">
              We have the experience to tackle any commercial project that you
              need help with.
            </p>
          </Link>
          <Link
            href="/services/emergency/"
            className="bg-red flex-1  drop-shadow-md p-8 rounded-2xl max-w-5xl lg:max-w-sm hover:scale-105 duration-300"
          >
            <div className="flex flex-col pb-4 items-center">
              <IoIosWarning color="#fff" size={72} />
              <span className="title text-white uppercase text-2xl text-center">
                Emergency
              </span>
            </div>
            <p className="text-white text-lg text-center">
              Electrical problems are no joke! The Electricians CO are on call
              24/7, 365 days a year for quick, safe and reliable repairs.
            </p>
          </Link>
        </div>
      </CircuitBgSection>
      <SectionTitle>Satisfied Clients</SectionTitle>
      <Container>
        <p className="text-xl text-center py-8 font-semibold">
          Founded in 2020, The Electricians CO is proud to have already added
          these businesses to our growing list of satisfied clients:
        </p>
        <div className="flex flex-col md:flex-row flex-wrap pb-12">
          <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/3">
            <Image
              src="/images/logos/hobby-lobby.png"
              alt="Hobby Lobby logo"
              width={326}
              height={130}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/3">
            <Image
              src="/images/logos/intermountain.png"
              alt="Intermountain logo"
              width={326}
              height={130}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/3">
            <Image
              src="/images/logos/t-mobile.png"
              alt="T Mobile logo"
              width={300}
              height={120}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/3">
            <Image
              src="/images/logos/advanced-hoa.png"
              alt="Advanced HOA logo"
              width={326}
              height={130}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/3">
            <Image
              src="/images/logos/wheel-pros.png"
              alt="Wheel Pros logo"
              width={304}
              height={122}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/3">
            <Image
              src="/images/logos/suzanne-miller.png"
              alt="Suzanne Miller logo"
              width={250}
              height={100}
            />
          </div>
        </div>
      </Container>
      <SectionTitle>Testimonials</SectionTitle>
      <CircuitBgSection>
        <div className="flex flex-col py-12">
          <p className="text-white font-semibold text-xl pb-8 z-10 text-center">
            See what our customers have to say about The Electricians CO.
          </p>
          <div className="z-10 p-4 bg-white rounded-2xl">
            <Script
              src="https://msgsndr.com/js/reviews_widget.js"
              strategy="lazyLoad"
            />

            <iframe
              id="msgsndr_reviews"
              src="https://msgsndr.com/reviews/get_widget/CuN6LeqV5iq7ZMWCWguc"
              frameBorder="0"
              scrolling="no"
              style={{ minWidth: "100%", width: "100%" }}
            ></iframe>
          </div>
        </div>
      </CircuitBgSection>
      <ContactSection />
    </Layout>
  );
}
