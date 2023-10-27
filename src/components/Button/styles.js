import styled from "styled-components";

export const Container = styled.button`
  border: none;
  padding: 1rem;

  background-color: ${({ theme }) => theme.COLORS.BLUE};
  color: ${({ theme }) => theme.COLORS.LIGHT_200};

  font-size: 2rem;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_200};
    color: ${({ theme }) => theme.COLORS.BLUE};

    font-weight: bold;
  }
`;