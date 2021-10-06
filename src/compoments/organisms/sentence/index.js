import React from "react";

// ATOMS
import Section from "../../atoms/section";

export default function Sentence(props) {
  const { id, text, name, job, image } = props;
  return <Section id={id}>Sentence</Section>;
}
