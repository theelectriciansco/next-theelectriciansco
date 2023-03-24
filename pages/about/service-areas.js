import Head from "next/head";

import React from "react";

import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Layout/Hero";
import Container from "../../components/Layout/Container";
import ContactSection from "../../components/Layout/ContactSection";
import CircuitBgSection from "../../components/Layout/ImageBgSection";
import SectionTitle from "../../components/Layout/SectionTitle";

import heroImage from "../../public/static/images/hero/hero-service-areas.png";

const ServiceAreas = () => {
  return (
    <Layout>
      <Head>
        <title>Service Areas - The Electricians</title>
        <meta
          name="description"
          content="The Electricians CO has got you covered! We happily serve residents of Denver and surrounding areas."
        />
      </Head>
      <Hero imageUrl={heroImage} title="Service Areas" />
      <Container>
        <p className="text-center text-lg font-semibold mx-auto pt-8">
          From 20-megawatt data center engineering/design and build-outs to
          something as simple as changing a switch out in your home, The
          Electricians CO has got you covered!
        </p>
        <p className="text-center text-lg font-semibold mx-auto py-8">
          We happily serve residents of Denver and surrounding areas.
        </p>
      </Container>
      <SectionTitle>Areas Serviced</SectionTitle>
      <CircuitBgSection>
        <div className="flex flex-col md:flex-row py-12 justify-center gap-x-12">
          <div className="flex flex-col gap-x-12 lg:flex-row">
            <ul className="text-white font-semibold text-3xl lg:text-lg z-10">
              <li>Acres Green</li>
              <li>Applewood</li>
              <li>Arvada</li>
              <li>Aspen Park</li>
              <li>Aurora</li>
              <li>Berkley</li>
              <li>Boulder</li>
              <li>Brighton</li>
              <li>Broomfield</li>
              <li>Carriage Club</li>
              <li>Castle Pines North</li>
              <li>Castle Rock</li>
              <li>Centennial</li>
              <li>Central City</li>
              <li>Cherry Hills Village</li>
              <li>Coal Creek</li>
              <li>Columbine</li>
              <li>Columbine Valley</li>
              <li>Commerce City</li>
              <li>Cottonwood</li>
            </ul>
            <ul className="text-white font-semibold text-3xl lg:text-lg z-10">
              <li>Denver</li>
              <li>Derby</li>
              <li>Downieville-Lawson-Dumont</li>
              <li>Dacono</li>
              <li>East Pleasant View</li>
              <li>Edgewater</li>
              <li>Elizabeth</li>
              <li>Englewood</li>
              <li>Evergreen</li>
              <li>Federal Heights</li>
              <li>Fort Lupton</li>
              <li>Foxfield</li>
              <li>Franktown</li>
              <li>Frederick</li>
              <li>Genesee</li>
              <li>Glendale</li>
              <li>Golden</li>
              <li>Grand View Estates</li>
              <li>Greenwood Village</li>
              <li>Heritage Hills</li>
            </ul>
          </div>
          <div className="flex flex-col gap-x-12 lg:flex-row">
            <ul className="text-white font-semibold text-3xl lg:text-lg z-10">
              <li>Highlands Ranch</li>
              <li>Indian Hills</li>
              <li>Ken Caryl</li>
              <li>Kiowa</li>
              <li>Kittredge</li>
              <li>Lakeside</li>
              <li>Lakewood</li>
              <li>Larkspur</li>
              <li>Littleton</li>
              <li>Lochbuie</li>
              <li>Lone Tree</li>
              <li>Louviers</li>
              <li>Meridian</li>
              <li>Montbello</li>
              <li>Morrison</li>
              <li>Mountain View</li>
              <li>North Washington</li>
              <li>Northglenn</li>
              <li>Parker</li>
            </ul>
            <ul className="text-white font-semibold text-3xl lg:text-lg z-10">
              <li>Stonegate</li>
              <li>Strasburg</li>
              <li>The Pinery</li>
              <li>Thornton</li>
              <li>Todd Creek</li>
              <li>Twin Lakes</li>
              <li>Welby</li>
              <li>West Pleasant View</li>
              <li>Westminster</li>
              <li>Wheat Ridge</li>
            </ul>
          </div>
        </div>
      </CircuitBgSection>
      <ContactSection />
    </Layout>
  );
};

export default ServiceAreas;
