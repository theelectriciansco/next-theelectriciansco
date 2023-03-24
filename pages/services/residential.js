import Head from "next/head";
import Image from "next/image";

import React from "react";

import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Layout/Hero";
import Button from "../../components/UI/Buttons/Button";
import ContactSection from "../../components/Layout/ContactSection";
import Container from "../../components/Layout/Container";
import SectionTitle from "../../components/Layout/SectionTitle";
import CircuitBgSection from "../../components/Layout/ImageBgSection";

import heroImage from "../../public/static/images/hero/hero-residential.png";

const Residential = () => {
  return (
    <Layout>
      <Head>
        <title>Residential Services - The Electricians</title>
        <meta
          name="description"
          content="Our residential customers include homeowners, real estate agents, and “Do-It-Yourselfers” who need real-life YouTube support. From start to finish, projects big and small"
        />
      </Head>
      <Hero
        imageUrl={heroImage}
        title="Residential Electricians"
        btn
        mobileBtn
      />
      <Container>
        <p className="text-center text-lg font-semibold mx-auto py-8">
          Our residential customers include homeowners, real estate agents, and
          “Do-It-Yourselfers” who need real-life YouTube support
        </p>
      </Container>
      <SectionTitle>Residential Services</SectionTitle>
      <CircuitBgSection>
        <div className="flex flex-col-reverse lg:flex-row py-8 lg:py-20 mx-auto gap-x-12">
          <div className="z-10 mx-auto flex-1">
            <Image
              src="/static/images/residential-lighting.jpg"
              alt="Residential lighting"
              className="rounded-2xl"
              width={600}
              height={818}
            />
          </div>
          <div className="z-10 flex justify-start flex-1 flex-col ">
            <p className="text-white font-semibold text-xl pb-4">
              Our residential customers include homeowners, real estate agents,
              and “Do-It-Yourselfers” who need real-life YouTube support. From
              start to finish, projects big and small, The Electricians CO team
              can help you with:
            </p>
            <ul className="text-white font-semibold text-xl list-disc pl-8 pb-4">
              <li>Load Center Installation swap – upgrade – refurbishing</li>
              <li>Custom & Semi-Custom home build/remodel</li>
              <li>Service Entrance Installation repair – replacement</li>
              <li>
                Interior Lighting LED retrofit and upgrades including
                chandeliers
              </li>
              <li>
                Exterior Lighting retrofit, security lighting, pool and hot tub
                lighting/wiring
              </li>
              <li>
                Fixtures recessed wafers/cans, pendant lights, flush, and
                surface mount fixtures
              </li>
              <li>
                Whole Home Ventilation fan/attic fan installation or replacement
              </li>
              <li>
                Home Generator installation Generac, Kohler, Briggs and
                Stratton, Champion
              </li>
              <li>
                Smart Home smart switches, smart panels, home automation systems
              </li>
              <li>
                Electric Car Battery Station charging/recharging installation
                for electric vehicles including: Tesla, Audi, Nissan, Lucid,
                Chevy, Hyundai and Kia
              </li>
              <li>All other residential electrical services such as: </li>
              <ul className="list-disc pl-12">
                <li>Circuit diagnosis and repair, flickering lights</li>
                <li>Device replacement</li>
                <li>GFI/GFCI</li>
                <li>Carbon monoxide and smoke detector installations</li>
                <li>Panels, breaker box, and fuse box</li>
                <li>Alarm installation and more</li>
              </ul>
            </ul>
            <p className="text-white font-semibold text-xl pb-12 lg:pb-0">
              We offer 24/7 Service and FREE estimates for all residential
              services booked directly through our website!
            </p>
          </div>
        </div>
        <div className="flex justify-center pb-8 lg:pb-20">
          <Button text="Schedule Service" link="/contact-us/" />
        </div>
      </CircuitBgSection>
      <ContactSection />
    </Layout>
  );
};

export default Residential;
