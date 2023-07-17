import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.textInverse};
  background-image: ${({ theme }) => `linear-gradient(${theme.colors.text}, ${theme.colors.text})`};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1;
  text-align: center;
  z-index: 2;
  
  padding: 1.25rem 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  border: none;

  transition: background-image 1s ease-out, box-shadow 0.5s ease-out;

  &:hover:not(:disabled),
  &:focus-visible {
    box-shadow: ${({ theme }) => theme.shadows.accent};
    background-image: ${({ theme }) => theme.gradients.primary};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.grayTint};
    filter: brightness(125%);
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: transparent;
  }
`;