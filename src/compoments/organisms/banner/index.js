import React from 'react'
import Section from '../../atoms/section';

export default function Banner(props) {
  const {
    id,
    title,
    description,
    buttonLabel,
    scrollLabel,
    video
  } = props;

  return (
    <Section id={id}>
      Banner
    </Section>
  )
}
