import styled from 'styled-components';
import { device } from '../../styles/Theme';

export const Main = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;

  @media ${device.tablet} {
    margin-inline: 1.5rem;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  align-items: end;

  background-color: ${({ theme }) => theme.colors.backgroundFrame};
  padding: 2.5rem 1.5rem;

  @media ${device.mobile} {
    width: 23.4375rem;
    box-shadow: ${({ theme }) => theme.shadows.default};
  }

  @media ${device.tablet} {
    width: 100%;
    max-width: 31.5rem;
    min-height: min-content;
    padding: 3rem 4rem 4rem;

    grid-template-rows: auto;
    row-gap: 2.5rem;
    justify-content: start;

    border-radius: ${({ theme }) => theme.borderRadius.large};
  }
`;

export const Content = styled.div`
  img {
    margin-bottom: 2.5rem;
  }

  p {
    margin-top: 1.5em;

    span {
      font-weight: ${({ theme }) => theme.typography.weight.bold};
    }
  }
`;

