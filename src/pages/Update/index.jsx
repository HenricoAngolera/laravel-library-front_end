import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Update() {
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }
  return(
    <Container>
      <Header />

      <main>
        <a onClick={handleBack}>voltar</a>
        <form>
          <h1>Editar livro</h1>
          <Input type="text" labelText="Titulo:"/>
          <Input type="text" labelText="Autor:"/>
          <Input type="number" labelText="Classificação (de 1 a 5):"/>
          <Input type="text" labelText="Resenha do livro:"/>
        </form>
        <div>
          <Button decoration="delete" title="Apagar"/>
          <Button decoration="edit" title="Editar"/>

        </div>
      </main>
    </Container>
  )
}