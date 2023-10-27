import { Container, BooksWrapper } from "./styles";

import { Header } from "../../components/Header";
import { BookCard } from "../../components/BookCard";

export function Home() {
  return (
    <Container>
      <Header/>

      <main>
        <h1>Bem vindo à JetBiblioteca</h1>

        <BooksWrapper>
          <h2>Livros:</h2>
          <BookCard title="Livro tal" author="tal tal tal" classification="5"/>

        </BooksWrapper>
      </main>
    </Container>
  )
}