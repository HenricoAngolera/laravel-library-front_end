import { Container } from "./styles";

export function Button({ title, decoration, ...rest }) {
  return (
    <Container className={decoration} {...rest}>
      {title}
    </Container>
  )
}