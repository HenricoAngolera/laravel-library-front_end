import { Container } from "./styles";

import { Button } from "../Button";

export function Header(){
  return (
    <Container>
      <div>
        <a>Home</a>
        <Button title="Novo livro" type="new"/>
      </div>
    </Container>
  )
}