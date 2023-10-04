/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Button({
  title,
  isBlack = false,
  icon: Icon,
  loading = false,
  ...rest
}) {
  return (
    <Container type="button" disabled={loading} {...rest} IsBlack={isBlack}>
      {Icon && <Icon size={20} />}
      {loading ? "Carregando..." : title}
    </Container>
  );
}
