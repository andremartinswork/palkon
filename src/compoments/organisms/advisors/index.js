import React from 'react'

// ATOMS
import Section from '../../atoms/section';

export default function Advisors(props) {
  const {
    id,
    smallTitle,
    title,
    items
  } = props;

  return (
    <Section id={id}>
      Advisors
    </Section>
  )
}
