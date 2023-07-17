import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  position: relative;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.size.small};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 1rem 1.5rem;
  margin-top: 0.5rem;
  
  border-radius: ${({ theme }) => theme.borderRadius.default};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.text};
  }

  &[aria-invalid=true] {
    outline: 1px solid ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.accentTint};
  }
`;

export const ErrorMsg = styled.span`
  position: absolute;
  top: 0;
  right: 0;

  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.small};
`;
