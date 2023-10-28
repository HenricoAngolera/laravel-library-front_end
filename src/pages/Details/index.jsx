import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

import { Container } from "./styles";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function Details() {
  const navigate = useNavigate();

  const params = useParams();

  const [book, setBook] = useState(null);

  function handleEdit() {
    navigate(`/update/${params.id}`);
  }

  function handleBack() {
    navigate(-1)
  }

  async function deleteBook() {
    if(confirm("Tem certeza que quer excluir este livro?")) {
      const response = await api.delete(`/${params.id}`);
      if (response.data.message){
        alert(response.data.message);
      }
      return navigate(-1);
    }
  }

  useEffect(() => {
    async function getBook() {
      const { data } = await api.get(`/${params.id}`);
      setBook(data);
    }

    getBook();
  }, [])
  return(
    <Container>
      <Header/>
      <main>
        <a onClick={handleBack}>voltar</a>
        { book && 
          <div className="data">
              <BsBook/>
              <h1>{book.titulo}</h1>
              <q>{book.autor}</q>
              <p className="star">{book.classificacao} <AiOutlineStar/></p>
              <p>{book.resenha}</p>
              <small>{book.created_at}</small>
          </div>
        }
        <div className="buttons">
          <Button title="Apagar" decoration="delete" onClick={deleteBook}/>
          <Button title="Editar" decoration="edit" onClick={handleEdit} />
        </div>
      </main>
    </Container>
  )
}