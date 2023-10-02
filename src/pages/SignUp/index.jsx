import { Container, Background, Form } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { MdArrowBack } from "react-icons/md";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RatingMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <Link to="/">
          <MdArrowBack size={20} />
          Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
