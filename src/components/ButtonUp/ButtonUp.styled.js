import styled from 'styled-components';

export const ButtonStyled = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 14px 16px;
  border: none;
  border-radius: 50%;

  background-color: #4b2a9921;
  transition: background-color var(--transition);

  &:hover,
  &:focus {
    background-color: #4b2a994a;
  }
`;
