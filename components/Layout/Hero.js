import Image from "next/image";
import { useRouter } from "next/router";

import React from "react";

import Button from "../UI/Buttons/Button";

const Hero = (props) => {
  const router = useRouter();

  const { imageUrl, title, btn, mobileBtn, text } = props;

  return (
    <div
      className={`relative lg:h-96 ${
        router.asPath === "/"
          ? "h-96"
          : router.asPath.indexOf("/services") > -1
          ? "h-96"
          : "h-56"
      }`}
    >
      <div className="imageWrapper">
        <Image
          priority
          src={imageUrl}
          fill
          alt="hero background image"
          loading="eager"
          className="grayscale brightness-50 lg:grayscale-0 lg:brightness-100"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="relative flex flex-col items-center lg:items-start p-8 justify-center h-full max-w-7xl mx-auto">
        <div className="max-w-xl text-center lg:text-left flex flex-col gap-6 pt-16">
          <h1 className="text-white title uppercase text-3xl sm:text-5xl">
            {title}
          </h1>
          {text && <span className="text-white text-lg">{text}</span>}
          <div className="flex gap-4 justify-center lg:justify-start">
            {btn && <Button link="/contact-us/" text="Schedule Service" />}
            {mobileBtn && (
              <Button mobile hollow url="tel:7206335937" text="Call Now" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
