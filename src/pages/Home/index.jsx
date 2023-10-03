import { Container, Content } from "./style";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <Section title="Meus filmes" hasButton>
          <Note
            data={{
              title: "O Resgate",
              description: "Filme sobre o resgate de um refém",
              rating: 2.5,
              tags: [
                { id: "1", name: "Ação" },
                { id: "2", name: "Drama" },
              ],
            }}
          />

          <Note
            data={{
              title: "O Resgate",
              description: "Filme sobre o resgate de um refém",
              rating: 2.5,
              tags: [
                { id: "1", name: "Ação" },
                { id: "2", name: "Drama" },
              ],
            }}
          />

          <Note
            data={{
              title: "O Resgate",
              description: "Filme sobre o resgate de um refém",
              rating: 2.5,
              tags: [
                { id: "1", name: "Ação" },
                { id: "2", name: "Drama" },
              ],
            }}
          />

          <Note
            data={{
              title: "O Resgate",
              description: "Filme sobre o resgate de um refém",
              rating: 2.5,
              tags: [
                { id: "1", name: "Ação" },
                { id: "2", name: "Drama" },
              ],
            }}
          />
        </Section>
      </Content>
    </Container>
  );
}
