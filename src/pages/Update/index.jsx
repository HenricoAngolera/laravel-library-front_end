import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./styles";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Update() {
  const navigate = useNavigate();
  const params = useParams();

  const [book, setBook] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [classification, setClassification] = useState("");
  const [resenha, setResenha] = useState("");

  function handleBack(){
    navigate(-1);
  }

  async function deleteBook() {
    if(confirm("Tem certeza que quer excluir este livro?")) {
      const response = await api.delete(`/${params.id}`);
      if (response.data.message){
        alert(response.data.message);
      }
      return navigate("/");
    }
  }

  async function updateBook() {
    await api.put(`/${params.id}`, {
      titulo,
      autor,
      classificacao: classification,
      resenha
    })
    alert("Atualizado com sucesso!");
    return navigate("/");
  }

  useEffect(() => {
    async function getBookData() {
      const {data} = await api.get(`/${params.id}`);
      setBook(data);
    }

    getBookData()
  }, [])
  return(
    <Container>
      <Header />

      <main>
        <a onClick={handleBack}>voltar</a>
        { book && 
          <form>
            <h1>Editar livro</h1>
            <Input type="text" labelText="Titulo:" defaultValue={book.titulo} onChange={e => setTitulo(e.target.value)}/>
            <Input type="text" labelText="Autor:" defaultValue={book.autor} onChange={e => setAutor(e.target.value)} />
            <Input type="number" labelText="Classificação (de 1 a 5):" defaultValue={book.classificacao} onChange={e => setClassification(e.target.value)}/>
            <Input type="text" labelText="Resenha do livro:" defaultValue={book.resenha} onChange={e => setResenha(e.target.value)}/>
          </form>
        }
        <div>
          <Button decoration="delete" title="Apagar" onClick={deleteBook}/>
          <Button decoration="edit" title="Editar" onClick={updateBook}/>

        </div>
      </main>
    </Container>
  )
}