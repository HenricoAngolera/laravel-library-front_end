import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Create() {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [classification, setClassification] = useState("");
  const [resenha, setResenha] = useState("");

  function handleBack() {
    navigate(-1)
  }

  async function createBook() {
    const response = await api.post("", {
      titulo,
      autor,
      classificacao: classification,
      resenha
    })
    if (response.data.message){
      alert(response.data.message)
    }
    return navigate("/");
  }
  return(
    <Container>
      <Header />

      <main>
        <a onClick={handleBack}>voltar</a>
        <form>
          <h1>Cadastrar livro</h1>
          <Input type="text" labelText="Titulo:" onChange={e => setTitulo(e.target.value)}/>
          <Input type="text" labelText="Autor:" onChange={e => setAutor(e.target.value)}/>
          <Input type="number" labelText="Classificação (de 1 a 5):" onChange={e => setClassification(e.target.value)}/>
          <Input type="text" labelText="Resenha do livro:" onChange={e => setResenha(e.target.value)}/>
        </form>
        <div>
          <Button decoration="new" title="Cadastrar" onClick={createBook}/>
        </div>
      </main>
    </Container>
  )
}