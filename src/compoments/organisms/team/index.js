import React from "react";

// ATOMS
import Section from "../../atoms/section";

export default function Team(props) {
  const { id, title, items } = props;
  return <Section id={id}>Team</Section>;
}
