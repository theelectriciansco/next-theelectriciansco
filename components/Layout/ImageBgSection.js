import Image from "next/image";

import React from "react";

import Container from "./Container";

const CircuitBgSection = (props) => {
  return (
    <div className="relative h-auto">
      <div className="imageWrapper">
        <Image
          src="/images/red-circuit.png"
          fill
          alt="Red circuitry background"
          style={{ objectFit: "cover" }}
        />
      </div>
      <Container>{props.children}</Container>
    </div>
  );
};

export default CircuitBgSection;
