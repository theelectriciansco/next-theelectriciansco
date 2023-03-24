import Head from "next/head";

import React from "react";

import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Layout/Hero";
import Container from "../../components/Layout/Container";
import ContactSection from "../../components/Layout/ContactSection";
import CircuitBgSection from "../../components/Layout/ImageBgSection";
import SectionTitle from "../../components/Layout/SectionTitle";

import heroImage from "../../public/static/images/hero/hero-meet-the-team.png";

const MeetTheTeam = () => {
  return (
    <Layout>
      <Head>
        <title>Meet The Team - The Electricians</title>
        <meta
          name="description"
          content="From master electricians with over 45 years of experience to journeymen with an average of 20 years of experience, our team of licensed and insured contractors is ready to tackle all your electrical project needs."
        />
      </Head>
      <Hero imageUrl={heroImage} title="Meet The Team" />
      <Container>
        <p className="text-center text-lg font-semibold mx-auto py-8">
          With the rapid growth in the greater Denver area, our owner and his
          family saw the need for electrical contractors who could do top
          quality work at reasonable prices, and, most importantly, follow
          through on the work as promised. He has worked with many talented
          electricians and decided to bring them together into one organization
          that would give commercial and residential clients the BEST talent for
          their projects.
        </p>
      </Container>
      <SectionTitle>Our Team</SectionTitle>
      <CircuitBgSection>
        <div className="flex flex-col pb-12">
          <p className="text-center text-lg font-semibold mx-auto py-8 text-white z-10">
            From master electricians with over 75 years of experience to
            journeymen with an average of 20 years of experience, our team of
            licensed and insured contractors are ready to tackle all your
            electrical project needs.
          </p>
          <div className="flex flex-col lg:flex-row gap-12 mx-auto">
            <div className="bg-red drop-shadow-md p-4 rounded-2xl max-w-sm">
              <div className="flex flex-col pb-4">
                <span className="title text-white uppercase text-2xl text-center">
                  Meridith Evans
                </span>
                <span className="italic text-white text-xl text-center">
                  Mom and “Senior” VP of Smooth Operations
                </span>
              </div>
              <p className="text-white text-lg text-center">
                Meredith takes care of all the details. She manages the team’s
                benefits, takes care of the books, problem solves, and, on
                occasion, babysits when Tony and Sarah take a night off.
              </p>
            </div>
            <div className="bg-red drop-shadow-md p-4 rounded-2xl max-w-sm">
              <div className="flex flex-col pb-4">
                <span className="title text-white uppercase text-2xl text-center">
                  Ron Evans
                </span>
                <span className="italic text-white text-xl text-center">
                  Dad and “Senior” VP of Where Things Go
                </span>
              </div>
              <p className="text-white text-lg text-center">
                With more than 45 years in the electrical business, Tim is the
                master of making sure we get it right the first time and EVERY
                time. He loves teaching all of us the skills he has mastered
                over a lifetime in this business.
              </p>
            </div>
          </div>
        </div>
      </CircuitBgSection>
      <ContactSection />
    </Layout>
  );
};

export default MeetTheTeam;
