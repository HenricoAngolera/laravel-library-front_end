import { Container } from "./styles";

export function Input({ labelText, text, ...rest }) {
  return (
    <Container>
      <label htmlFor="">{labelText}</label>
      <input id="" {...rest} />
    </Container>
  )
}