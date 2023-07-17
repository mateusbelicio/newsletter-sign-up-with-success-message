import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  color: ${({ theme }) => theme.colors.textInverse};
  background: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1;
  text-align: center;
  
  padding: 1.25rem 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  border: none;

  transition: background-color 0.2s, box-shadow 0.2s;

  &:not(:disabled)::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.gradients.primary};
    z-index: -1;
  }

  &:hover:not(:disabled),
  &:focus-visible {
    box-shadow: ${({ theme }) => theme.shadows.accent};
    background-color: transparent;
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