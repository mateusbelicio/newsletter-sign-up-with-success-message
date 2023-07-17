import styled from 'styled-components';
import { device } from '../../styles/Theme';
import listIcon from '../../assets/icon-list.svg';

export const Main = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;

  @media ${device.tablet} {
    margin-inline: 1.5rem;
  }
`;

export const Container = styled.div`  
  display: grid;
  row-gap: 2.5rem;
  column-gap: 1.5rem;
  justify-items: center;
  
  background-color: ${({ theme }) => theme.colors.backgroundFrame};
  min-height: 100vh;
  grid-template-rows: min-content 1fr;
  
  @media ${device.mobile} {
    width: 23.4375rem;
    box-shadow: ${({ theme }) => theme.shadows.default};
    align-items: center;
  }
  
  @media ${device.tablet} {
    width: 100%;
    max-width: 58rem;
    min-height: min-content;
    padding: 1.5rem;
    
    grid-template-columns: repeat(2, 1fr);
    row-gap: 0;

    border-radius: ${({ theme }) => theme.borderRadius.large};
  }
  
  @media ${device.laptop} {
    column-gap: 4rem;
    padding-left: 4rem;
  }
`;

export const Content = styled.div`
  max-width: 23.4375rem;
  padding-inline: 1.5rem;
  padding-bottom: 2.5rem;

  & > :not(:first-child) {
    margin-top: 1.5rem;
  }

  @media ${device.tablet} {
    padding: 0;
  }
`;

export const Picture = styled.picture`
  display: flex;
  align-items: start;
  justify-content: center;

  @media ${device.tablet} {
    order: 2;
    justify-self: end;
  }
`;

export const List = styled.ul`
  display: grid;
  gap: 0.625rem;

  padding-left: 2.3125rem;
  list-style: none;
  
  li { 
    position: relative;
    display: flex;
    align-items: center;
  }

  li::before {
    content: url(${listIcon});
    position: absolute;
    right: calc(100% + 1rem);
    top: 1px;
    line-height: 1;
  }
`;