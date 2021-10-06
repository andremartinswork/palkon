import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import DOMPurify from 'isomorphic-dompurify';
import { rem } from 'polished';
import { colors, spaces, texts } from '../../../styles/theme';

function Text(props) {
  const {
    text,
    editor,
    tag = 'div',
    id,
    className,
    style,
    children,
    lineHeight,
    align,
    uppercase,
    underline,
    noWrap,
    maxWidth,
    hyphens,
    ellipsis,
    color,
    opacity,
    bold,
    weight
  } = props;

  const stylesProps = {
    align,
    uppercase,
    underline,
    noWrap,
    maxWidth,
    hyphens,
    ellipsis,
    color,
    opacity,
    bold,
    lineHeight,
    weight,
    style: {
      ...style
    }
  };

  if (text && editor) {
    return <Atom as={tag} id={id} className={className} {...stylesProps} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} />;
  }
  return (
    <Atom as={tag} id={id} className={className} {...stylesProps}>
      {children}
    </Atom>
  );
}

const Atom = styled.div`
  transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);

  &.pyr-32 {
    font-family: 'Playfair Display', serif;
    font-size: ${texts[32]};
    font-weight: 500;
    line-height: ${rem('40px')};
    color: ${colors.c_FFFFFF};
  }

  &.rbo-24 {
    font-family: 'Roboto', sans-serif;
    font-size: ${texts[24]};
    font-weight: 400;
    line-height: ${rem('36px')};
    color: ${colors.c_FFFFFF};
  }

  ${({ align }) =>
    align &&
    css`
      text-align: ${align}!important;
    `}
  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase !important;
    `}
  ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline !important;
    `}
  ${({ noWrap }) =>
    noWrap &&
    css`
      white-space: nowrap !important;
    `}
  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight}!important;
    `}
  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight}!important;
    `}
  ${({ hyphens }) =>
    hyphens &&
    css`
      hyphens: ${hyphens}!important;
    `}
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${ellipsis};
      -webkit-box-orient: vertical;
    `}
  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth}!important;
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${color}!important;
    `}
  ${({ opacity }) =>
    opacity &&
    css`
      opacity: ${opacity}!important;
    `}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: 600 !important;
    `}
`;

Text.propTypes = {
  text: PropTypes.string,
  editor: PropTypes.bool,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div', 'p', 'label', 'strong']),
  id: PropTypes.string,
  className: PropTypes.string,
  align: PropTypes.string,
  uppercase: PropTypes.bool,
  underline: PropTypes.bool,
  noWrap: PropTypes.bool,
  hyphens: PropTypes.bool,
  ellipsis: PropTypes.number,
  maxWidth: PropTypes.string,
  opacity: PropTypes.number,
  color: PropTypes.string,
  weight: PropTypes.number
  // children: PropTypes.element // NO TIME FOR THAT
  // style: PropTypes.objectOf(PropTypes.object())
};

export default Text;
