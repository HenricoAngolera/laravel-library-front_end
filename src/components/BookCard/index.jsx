import { BsBook } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

import { Container } from "./styles";

export function BookCard({ title, author, classification, ...rest }) {
  return(
    <Container {...rest}>
      <BsBook/>
      <h3>{title}</h3>
      <div>
        <q>{author}</q>
        <p>{classification} <AiOutlineStar/></p>
      </div>
    </Container>
  )
}