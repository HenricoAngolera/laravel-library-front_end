import { Container } from "./styles";

export function Input({ labelText, id, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} {...rest} />
    </Container>
  )
}