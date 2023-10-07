import { Container, Content, Notes } from "./style";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Button } from "../../components/Button";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <div>
          <h2>Meus filmes</h2>

          <Link to="/new">
            <Button
              className="addFilm"
              title="Adicionar filme"
              icon={AiOutlinePlus}
              to="/new"
            />
          </Link>
        </div>

        <Notes>
          <Note
            data={{
              title: "Harry potter e a pedra filosofal",
              description: "Filme sobre bruxos",
              rating: 5,
              tags: [
                { id: "1", name: "Fantasia" },
                { id: "2", name: "Aventura" },
              ],
            }}
          />
        </Notes>
      </Content>
    </Container>
  );
}
