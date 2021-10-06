// STYLED
import styled, { css } from 'styled-components';

// NEXT
import Link from 'next/link';

// ICON
import ArrowRight from '../icons/arrowRight';

// THEME
import { texts, colors } from '../../../styles/theme';

export default function Button(props) {
  return (
    <>
      <ButtonSlug {...props} />
      <ButtonLink {...props} />
    </>
  );
}

function ButtonSlug(props) {
  const { type, theme = { value: 'md-simple-white' }, page, text } = props;

  if (type.value === 'isSlug' && text && page && page.url) {
    return (
      <Link href={page.url}>
        <a>
          <div style={{ display: 'inline-block' }}>
            <Content buttonTheme={theme.value}>
              <Text>{text}</Text>
              <ArrowRight />
            </Content>
          </div>
        </a>
      </Link>
    );
  }
  return null;
}

function ButtonLink(props) {
  const { type, theme = { value: 'simple-blue' }, link, text } = props;

  if (type.value === 'isLink' && text && link) {
    return (
      <a href={link} target='_blank' aria-label={text} rel='noopener noreferrer'>
        <div style={{ display: 'inline-block' }}>
          <Content buttonTheme={theme.value}>
            <Text>{text}</Text>
            <ArrowRight />
          </Content>
        </div>
      </a>
    );
  }
  return null;
}

const Text = styled.div`
  font-family: 'Koerber';
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  transition: all 0.5s ease;
`;
const Content = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 12px;
    height: 16px;
    margin-left: 16px;
    transition: all 0.5s ease;
  }

  ${({ buttonTheme }) =>
    buttonTheme === 'md-simple-white' &&
    css`
      ${Text} {
        color: ${colors.c_FFFFFF};
        font-size: ${texts['16']};
      }
      svg {
        fill: ${colors.c_FFFFFF};
        width: 14px;
        height: 16px;
      }

      @media (hover: hover) and (pointer: fine) {
        :hover {
          cursor: pointer;

          ${Text} {
            color: ${colors.c_000000};
          }
          svg {
            fill: ${colors.c_000000};
            transform: translateX(4px);
          }
        }
      }
    `}
`;
