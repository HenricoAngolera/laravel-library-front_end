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

  main {
    grid-area: content;

    overflow-x: auto;

    margin-inline: 2rem;

    a {
      font-size: 2.5rem;
    }

    form {
      margin-block: 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;