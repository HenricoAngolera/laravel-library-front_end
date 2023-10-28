import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container, BooksWrapper } from "./styles";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { BookCard } from "../../components/BookCard";

export function Home() {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);

  function handleDetails() {
    navigate("/details/1")
  }

  async function getAllBooks() {
    const { data } = await api.get("");
    
    console.log(data);
    setBooks(data);
  }

  useEffect(() => {
    getAllBooks()
  }, [])
  return (
    <Container>
      <Header/>

      <main>
        <h1>Bem vindo à JetBiblioteca</h1>

        <BooksWrapper>
         
            <h2>Livros:</h2>
            {
              books && books.map((book) => (
                <BookCard key={book.id} title={book.titulo} author={book.autor} classification={book.classificacao} onClick={handleDetails}/>
              ))
            }
            
            
        </BooksWrapper>
      </main>
    </Container>
  )
}