import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 2rem;
  }

  input {
    padding: 1rem;

    border: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;