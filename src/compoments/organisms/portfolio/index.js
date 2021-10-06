import React from "react";

// ATOMS
import Section from "../../atoms/section";

export default function Portfolio(props) {
  const { id, title, description, items } = props;
  return <Section id={id}>Portfolio</Section>;
}
