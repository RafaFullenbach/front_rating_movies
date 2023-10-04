import { Container, Content, Markers, ButtonWrap } from "./styles";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Tagitem } from "../../components/Tagitem";
import { Button } from "../../components/Button";

export function New() {
  return (
    <Container>
      <Header />
      <Content>
        <Link to="/">
          <MdArrowBack size={20} />
          Voltar
        </Link>

        <h1>Novo filme</h1>

        <div>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota(de 0 a 5)" />
        </div>

        <Textarea placeholder="Observações" />

        <Markers>
          <h2>Marcadores</h2>

          <div>
            <Tagitem value="Ação" />
            <Tagitem isNew placeholder="Nova tag" />
          </div>
        </Markers>

        <ButtonWrap>
          <Button isBlack title="Excluir filme" />
          <Button title="Salvar alterações" />
        </ButtonWrap>
      </Content>
    </Container>
  );
}
