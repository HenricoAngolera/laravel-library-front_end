import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import { Button } from "../Button";

export function Header(){
  const navigate = useNavigate();

  function handleHome() {
    navigate("/");
  }

  function handleNew() {
    navigate("/create");
  }

  return (
    <Container>
      <div>
        <a onClick={handleHome}>Home</a>
        <Button title="Novo livro" decoration="new" onClick={handleNew} />
      </div>
    </Container>
  )
}