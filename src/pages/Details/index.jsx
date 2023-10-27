import { useNavigate } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function Details() {
  const navigate = useNavigate();

  function handleEdit() {
    navigate("/update/1");
  }

  function handleBack() {
    navigate(-1)
  }
  return(
    <Container>
      <Header/>
      <main>
        <a onClick={handleBack}>voltar</a>
        <div className="data">
          <BsBook/>
          <h1>Titulo do livro</h1>
          <q>Autor</q>
          <p className="star">5 <AiOutlineStar/></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis architecto odit quisquam at quod praesentium cupiditate similique commodi repellendus eos, tempore animi adipisci eaque ex quam quaerat nobis, sunt numquam.</p>
          <small>data adição</small>
        </div>
        <div className="buttons">
          <Button title="Apagar" decoration="delete"/>
          <Button title="Editar" decoration="edit" onClick={handleEdit} />
        </div>
      </main>
    </Container>
  )
}