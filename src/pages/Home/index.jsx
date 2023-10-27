import { useNavigate } from "react-router-dom";

import { Container, BooksWrapper } from "./styles";

import { Header } from "../../components/Header";
import { BookCard } from "../../components/BookCard";

export function Home() {
  const navigate = useNavigate();

  function handleDetails() {
    navigate("/details/1")
  }
  return (
    <Container>
      <Header/>

      <main>
        <h1>Bem vindo à JetBiblioteca</h1>

        <BooksWrapper>
          <h2>Livros:</h2>
          <BookCard title="Livro tal" author="tal tal tal" classification="5" onClick={handleDetails}/>

        </BooksWrapper>
      </main>
    </Container>
  )
}