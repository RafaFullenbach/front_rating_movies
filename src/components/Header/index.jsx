import { Container, Profile } from "./styles";
import { Link } from "react-router-dom";

import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h2>RatingMovies</h2>

      <Input placeholder="Pesquisar pelo título" type="text" />

      <Profile>
        <div>
          <strong>Rafael Füllenbach</strong>

          <Link to="#">sair</Link>
        </div>

        <Link to="#">
          <img
            src="https://github.com/RafaFullenbach.png"
            alt="Foto do usuário"
          />
        </Link>
      </Profile>
    </Container>
  );
}
