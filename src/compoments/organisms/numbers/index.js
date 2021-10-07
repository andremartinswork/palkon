import React from 'react'
import styled from 'styled-components';
import Section from '../../atoms/section'

export default function Numbers(props) {
  const {
    id,
    title,
    items
  } = props;

  return (
    <Section id={id}>
      Numbers
      <Pattern />
    </Section>
  )
}

const Pattern = styled.div`
  width: 100%;
  height: 900px;
  background: url('/patterns/pattern.svg');
  opacity: 0.1;
`;
