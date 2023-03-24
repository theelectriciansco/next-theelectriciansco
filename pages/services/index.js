import Head from "next/head";
import Image from "next/image";

import React from "react";

import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Layout/Hero";
import Container from "../../components/Layout/Container";
import ContactSection from "../../components/Layout/ContactSection";
import CircuitBgSection from "../../components/Layout/ImageBgSection";
import SectionTitle from "../../components/Layout/SectionTitle";
import Button from "../../components/UI/Buttons/Button";

import heroImage from "../../public/static/images/hero/hero-services.png";

const Services = () => {
  return (
    <Layout>
      <Head>
        <title>
          Services - The Electricians - Residential and Commercial Electrical
          Services Overview
        </title>
        <meta
          name="description"
          content="Our Residential and Commercial Services provide top quality workmanship for your electrical needs."
        />
      </Head>
      <Hero imageUrl={heroImage} title="Services" btn mobileBtn />
      <Container>
        <p className="text-center text-lg font-semibold mx-auto py-8">
          No job is too big or too small for The Electricians CO. We have the
          necessary experience to tackle any residential or commercial project
          that you need help with.
        </p>
      </Container>
      <SectionTitle>Commercial Services</SectionTitle>
      <CircuitBgSection>
        <div className="flex flex-col-reverse lg:flex-row py-8 lg:py-20 max-w-5xl mx-auto">
          <div className="z-10 mx-auto flex-1">
            <Image
              src="/static/images/commercial-panel.jpg"
              alt="Commercial electrical panel"
              className="rounded-2xl"
              width={488}
              height={666}
            />
          </div>
          <div className="z-10 flex justify-start flex-1 flex-col ">
            <p className="text-white font-semibold text-xl pb-8">
              Our Commercial Service customers include HOA management companies,
              property management companies, large chain retailers, designers,
              real estate agents, business/building owners, and government
              contractors. No job is too complicated or challenging for us!{" "}
            </p>
            <p className="text-white font-semibold text-xl pb-8">
              The Electricians CO team can help you with:
            </p>
            <ul className="text-white font-semibold text-xl list-disc pl-12 pb-12 lg:pb-0">
              <li>Tenant Improvements</li>
              <li>Design-build</li>
              <li>Pre-construction</li>
              <li>Medium voltage step down transformers</li>
              <li>Multi-family service</li>
              <li>
                Parking lot, street, security, wall pack, pathway, and interior
                lighting management
              </li>
              <li>Service entrances</li>
              <li>Panel board swap/upgrades/refurbishing</li>
              <li>Transformer diagnosis, upgrades, and replacements</li>
              <li>
                LED retrofit for wall pack, parking lot and street, interior 4’,
                8’ and 4 pin CFL, fixtures, 2 x 4 and 2 x 2 troffer lighting,
                with energy rebate consultation.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center pb-8 lg:pb-20">
          <Button text="Schedule Service" link="/contact-us/" />
        </div>
      </CircuitBgSection>
      <SectionTitle>Residential Services</SectionTitle>
      <CircuitBgSection>
        <div className="flex flex-col lg:flex-row py-8 lg:py-20 mx-auto gap-x-12">
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
          <div className="z-10 mx-auto flex-1">
            <Image
              src="/images/residential-lighting.jpg"
              alt="Residential lighting"
              className="rounded-2xl"
              width={600}
              height={818}
            />
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

export default Services;
