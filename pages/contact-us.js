import Head from "next/head";

import React from "react";

import Layout from "../components/Layout/Layout";
import ContactForm from "../components/UI/Forms/ContactForm";
import Container from "../components/Layout/Container";

const ContactUs = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Us - The Electricians - Schedule Your Appointment</title>
        <meta
          name="description"
          content="Schedule service directly using the form or give us a call at 720-712-3010. For your convenience, our operators are available 24/7."
        />
      </Head>
      <Container>
        <h1 className="title text-black text-4xl uppercase text-center pt-32 pb-4 lg:py-12">
          Contact Us
        </h1>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <p className="text-xl font-semibold pb-8">
              Interested in scheduling an appointment Do you have a question for
              a member of The Electricians CO team? Would you like to discuss
              your next project?
            </p>
            <p className="text-xl font-semibold pb-8">
              Schedule service directly using the form or give us a call at{" "}
              <a href="tel:7207123010" className="underline">
                720-712-3010
              </a>
              . For your convenience, our operators are available 24/7.
            </p>
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactUs;
