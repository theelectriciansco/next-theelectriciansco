import React from "react";

import SectionTitle from "./SectionTitle";
import Container from "./Container";
import Button from "../UI/Buttons/Button";

const ContactSection = (props) => {
  return (
    <>
      <SectionTitle>Contact Us</SectionTitle>
      <Container>
        <p className="text-center text-lg font-semibold max-w-xl mx-auto py-8">
          {props.text ||
            "Schedule an appointment, discuss a future project, or ask The Electricians CO team a question with our contact form."}
        </p>
        <div className="text-center pb-12">
          <Button text="Contact Us" link="/contact-us/" />
        </div>
      </Container>
    </>
  );
};

export default ContactSection;
