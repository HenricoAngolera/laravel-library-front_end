import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  display: grid;

  width: 100%;
  height: 10rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};

  > div {
    margin-inline: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      font-size: 3rem;
      transition: 0.5s;

    }

    a:hover {
      font-weight: bold;
    }
  }

`; 