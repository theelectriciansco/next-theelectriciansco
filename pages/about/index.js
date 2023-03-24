import Head from "next/head";
import Image from "next/image";

import React from "react";

import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Layout/Hero";
import Container from "../../components/Layout/Container";
import SectionTitle from "../../components/Layout/SectionTitle";
import CircuitBgSection from "../../components/Layout/ImageBgSection";
import ContactSection from "../../components/Layout/ContactSection";

import heroImage from "../../public/static/images/hero/hero-about.png";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>
          {
            "About Us - The Electricians - Denver Metro's Electrician For New or Repair Services"
          }
        </title>
        <meta
          name="description"
          content="We’re here to make sure they’re helping YOU! We’ve spent our lives studying, installing, and containing electricity because…well, we appreciate the power and like the challenges"
        />
      </Head>
      <Hero imageUrl={heroImage} title="About Us" />
      <Container>
        <p className="text-xl text-center pt-8 font-semibold">
          Electrons are invisible, potent, pesky little particles that may help
          you, bite you, or cause catastrophic failures if allowed. We’re here
          to make sure they’re helping YOU! We’ve spent our lives studying,
          installing, and containing electricity because…well, we appreciate the
          power and like the challenges.
        </p>
        <p className="text-xl text-center py-8 font-semibold">
          Founded in 2020, The Electricians CO is proud to have already added
          these businesses to our growing list of satisfied clients:
        </p>
        <div className="flex flex-col md:flex-row flex-wrap pb-12">
          <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/3">
            <Image
              src="/static/images/logos/hobby-lobby.png"
              alt="Hobby Lobby logo"
              width={326}
              height={130}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/3">
            <Image
              src="/static/images/logos/intermountain.png"
              alt="Intermountain logo"
              width={326}
              height={130}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/3">
            <Image
              src="/static/images/logos/t-mobile.png"
              alt="T Mobile logo"
              width={300}
              height={120}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/3">
            <Image
              src="/static/images/logos/advanced-hoa.png"
              alt="Advanced HOA logo"
              width={326}
              height={130}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/3">
            <Image
              src="/static/images/logos/wheel-pros.png"
              alt="Wheel Pros logo"
              width={304}
              height={122}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/3">
            <Image
              src="/static/images/logos/suzanne-miller.png"
              alt="Suzanne Miller logo"
              width={250}
              height={100}
            />
          </div>
        </div>
      </Container>
      <SectionTitle>Our Residential Service Guarantee</SectionTitle>
      <CircuitBgSection>
        <div className="flex flex-col-reverse lg:flex-row py-8 lg:py-20 max-w-5xl mx-auto">
          <div className="z-10 mx-auto flex-1">
            <Image
              src="/static/images/electrician.png"
              alt="Electrician"
              width={459}
              height={576}
            />
          </div>
          <div className="z-10 flex justify-start flex-1 flex-col ">
            <p className="text-white font-semibold text-xl pb-8">
              Quality Workmanship. Old-Fashioned Integrity. Value for your
              money.
            </p>
            <p className="text-white font-semibold text-xl pb-8">
              Our residential customer GUARANTEE:
            </p>
            <ul className="text-white font-semibold text-xl list-disc pl-12 pb-12 lg:pb-8">
              <li>Pricing upfront</li>
              <li>Five years 100% parts and labor warranty</li>
              <li>Uniformed technicians who are:</li>
              <ul className="list-disc pl-12">
                <li>
                  Clean and courteous and carry valid photo identification.
                </li>
                <li>
                  Independently background-checked and tested for illegal drugs.
                </li>
                <li>
                  Licensed and insured with the most current training in the
                  field.
                </li>
                <li>
                  Equipped with shoe covers, face masks, and hand sanitizer.
                </li>
              </ul>
              <li>On-site COVID-19 testing of technicians.</li>
              <li>We will leave your project area clean and neat.</li>
              <li>
                Your complete satisfaction, or we’ll come back and fix it!
              </li>
            </ul>
            <p className="text-white font-semibold text-xl pb-8 lg:pb-0">
              With the professionals at The Electricians CO, your safety and
              security are our NUMBER ONE priority!{" "}
            </p>
          </div>
        </div>
      </CircuitBgSection>
      <SectionTitle>Our Code Of Ethics</SectionTitle>
      <CircuitBgSection>
        <div className="flex flex-col lg:flex-row py-8 lg:py-20 mx-auto gap-x-12">
          <div className="z-10 flex justify-start flex-1 flex-col ">
            <p className="text-white font-semibold text-xl pb-4">
              We strive to be honorable and trustworthy and to deal with our
              clients and business partners with integrity and honesty.
            </p>
            <p className="text-white font-semibold text-xl pb-4">
              We are committed to reliable electrical work from honest,
              hardworking electricians who want to inspire confidence, bring you
              the most professional and current knowledge in our field.
            </p>
            <p className="text-white font-semibold text-xl pb-4">
              We give you our personal commitment to protect the safety and
              security of your family or your business.
            </p>
          </div>
          <div className="z-10 mx-auto flex-1">
            <Image
              src="/static/images/electrician-gloves.png"
              alt="Electrician gloves"
              width={414}
              height={336}
            />
          </div>
        </div>
      </CircuitBgSection>
      <ContactSection />
    </Layout>
  );
};

export default About;
