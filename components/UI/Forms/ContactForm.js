import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import Button from "../Buttons/Button";

const FORMSPARK_ACTION_URL = "https://submit-form.com/MAR9lLrQ";

const ContactForm = () => {
  const [submitDisabled, setSubmitDisabled] = useState(true);

  return (
    <form
      //onSubmit={handleSubmit}
      method="POST"
      action="https://submit-form.com/MAR9lLrQ"
      //ref={formRef}
    >
      <input
        type="hidden"
        name="_redirect"
        value="https://theelectriciansco.vercel.app/thank-you"
      />
      <input type="hidden" name="_append" value="false" />
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6">
          <div>
            <label className="hidden" htmlFor="Name">
              Name
            </label>
            <input
              className="border-highlight border-2 rounded-lg text-xl px-2 py-1 w-full"
              name="Name"
              id="name"
              maxLength={40}
              type="text"
              placeholder="Name*"
              required
            />
          </div>
          <div>
            <label className="hidden" htmlFor="Email">
              Email
            </label>
            <input
              className="border-highlight border-2 rounded-lg text-xl px-2 py-1 w-full"
              name="Email"
              id="email"
              type="email"
              placeholder="Email*"
              required
            />
          </div>
          <div>
            <label className="hidden" htmlFor="Phone">
              Phone
            </label>
            <input
              className="border-highlight border-2 rounded-lg text-xl px-2 py-1 w-full"
              name="Phone"
              id="phone"
              type="text"
              placeholder="Phone*"
              required
              maxLength="16"
            />
          </div>
          <div>
            <label className="hidden" htmlFor="Zip">
              Zip Code
            </label>
            <input
              className="border-highlight border-2 rounded-lg text-xl px-2 py-1 w-full"
              name="Zip"
              id="zip"
              type="number"
              placeholder="Zip Code*"
              required
              maxLength="5"
            />
          </div>
        </div>
        <div>
          <div className="pb-6">
            <label className="hidden" htmlFor="Subject">
              Subject
            </label>
            <input
              className="border-highlight border-2 rounded-lg text-xl px-2 py-1 w-full"
              name="Subject"
              id="subject"
              type="text"
              placeholder="Subject*"
              required
            />
          </div>
          <div className="pb-12">
            <label className="hidden" htmlFor="Message">
              Message
            </label>
            <textarea
              className="border-highlight border-2 rounded-lg text-xl px-2 py-1 w-full"
              name="Message"
              id="message"
              placeholder="Message*"
              rows={6}
              required
            />
          </div>
        </div>
      </div>

      <div className="pb-6 flex flex-col justify-center items-center gap-6 lg:flex-row ">
        <ReCAPTCHA
          size="normal"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={() => setSubmitDisabled(false)}
        />
        <Button type="submit" text="Submit" disabled={submitDisabled} />
      </div>
    </form>
  );
};

export default ContactForm;
