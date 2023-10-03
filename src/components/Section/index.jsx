/* eslint-disable react/prop-types */
import { Container, Content } from "./styles";
import { AiOutlinePlus } from "react-icons/ai";

import { Button } from "../../components/Button";

export function Section({ title, children, hasButton = false }) {
  return (
    <Container HasButton={hasButton}>
      <div>
        <h2>{title}</h2>
        <Button
          className="addFilm"
          title="Adicionar filme"
          icon={AiOutlinePlus}
        />
      </div>
      <Content>{children}</Content>
    </Container>
  );
}
