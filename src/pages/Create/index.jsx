import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Create() {
  return(
    <Container>
      <Header />

      <main>
        <a>voltar</a>
        <form>
          <h1>Cadastrar livro</h1>
          <Input type="text" labelText="Titulo:"/>
          <Input type="text" labelText="Autor:"/>
          <Input type="number" labelText="Classificação (de 1 a 5):"/>
          <Input type="text" labelText="Resenha do livro:"/>
        </form>
        <div>
          <Button type="new" title="Cadastrar"/>
        </div>
      </main>
    </Container>
  )
}