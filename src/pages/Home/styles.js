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
    
    h1 {
      text-align: center;
      margin-block: 3rem;
    }
  }
`;

export const BooksWrapper = styled.section`
  margin-inline: 3rem;

  display: flex;
  flex-direction: column;  
  gap: 2rem;

  > h2 {
    font-size: 3rem;
  }

`;