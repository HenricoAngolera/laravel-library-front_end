import { AiOutlineStar } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function Details() {
  return(
    <Container>
      <Header/>
      <main>
        <a>voltar</a>
        <div className="data">
          <BsBook/>
          <h1>Titulo do livro</h1>
          <q>Autor</q>
          <p className="star">5 <AiOutlineStar/></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis architecto odit quisquam at quod praesentium cupiditate similique commodi repellendus eos, tempore animi adipisci eaque ex quam quaerat nobis, sunt numquam.</p>
          <small>data adição</small>
        </div>
        <div className="buttons">
          <Button title="Apagar" type="delete"/>
          <Button title="Editar" type="edit" />
        </div>
      </main>
    </Container>
  )
}