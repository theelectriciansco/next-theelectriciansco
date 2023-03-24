import Head from "next/head";
import Image from "next/image";

import React from "react";

import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Layout/Hero";
import Container from "../../components/Layout/Container";
import SectionTitle from "../../components/Layout/SectionTitle";
import CircuitBgSection from "../../components/Layout/ImageBgSection";
import Button from "../../components/UI/Buttons/Button";
import ContactSection from "../../components/Layout/ContactSection";

import heroImage from "../../public/static/images/hero/hero-commercial.png";

const Commercial = () => {
  return (
    <Layout>
      <Head>
        <title>Commercial Services - The Electricians</title>
        <meta
          name="description"
          content="Our Commercial Service customers include HOA management companies, property management companies, large chain retailers, designers, real estate agents, business/building owners, and government contractors."
        />
      </Head>
      <Hero imageUrl={heroImage} title="Commercial Services" btn mobileBtn />
      <Container>
        <p className="text-center text-lg font-semibold mx-auto py-8">
          Our Commercial Service customers include HOA management companies,
          property management companies, large chain retailers, designers, real
          estate agents, business/building owners, and government contractors.
          No job is too complicated or challenging for us!
        </p>
      </Container>
      <SectionTitle>Commercial Services</SectionTitle>
      <CircuitBgSection>
        <div className="flex flex-col-reverse lg:flex-row py-8 lg:py-20 max-w-4xl mx-auto">
          <div className="z-10 flex justify-center flex-1">
            <Image
              src="/static/images/commercial-panel.jpg"
              alt="Commercial electrical panel"
              className="rounded-2xl"
              width={368}
              height={502}
            />
          </div>
          <div className="z-10 flex justify-start flex-1 flex-col ">
            <p className="text-white font-semibold text-xl pb-8">
              The Electricians CO team can help you with:
            </p>
            <ul className="text-white font-semibold text-xl list-disc pl-12 pb-12">
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
      <ContactSection />
    </Layout>
  );
};

export default Commercial;
