import { Container } from "./styles";

export function Button({ title, type }) {
  return (
    <Container className={type}>
      {title}
    </Container>
  )
}