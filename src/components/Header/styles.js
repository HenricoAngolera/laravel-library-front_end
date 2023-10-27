import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 10rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};

  display: flex;
  justify-content: space-between;
  align-items: center;
`; 