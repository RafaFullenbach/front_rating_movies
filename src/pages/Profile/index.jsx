import { Container, Form, Avatar } from "./styles";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <MdArrowBack size={20} />
          Voltar
        </Link>
      </header>
      <Form>
        <Avatar>
          <img
            src="https://github.com/RafaFullenbach.png"
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} />

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha atual" type="text" icon={FiLock} />

        <Input placeholder="Nova senha" type="text" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
