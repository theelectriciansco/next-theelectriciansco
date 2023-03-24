import React from "react";

import Container from "./Container";

const SectionTitle = (props) => {
  return (
    <div className="bg-red">
      <Container>
        <h2 className="title text-white text-4xl text-center uppercase py-4 drop-shadow-md">
          {props.children}
        </h2>
      </Container>
    </div>
  );
};

export default SectionTitle;
