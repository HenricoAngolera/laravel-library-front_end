import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto;

  grid-template-areas: 
    "header"
    "content"
  ;

  > main {
    grid-area: content;

    overflow-x: auto;

    margin-inline: 2rem;

    a {
      font-size: 3rem;
    }

    .data {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    .data > svg {
      font-size: 20rem;
    }

    q {
      font-size: 3rem;
    }

    .star {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .star svg {
      font-size: 2rem;
    }

    small {
      font-size: 1.5rem;
    }

    .buttons {
      margin-block: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }
  }
`;