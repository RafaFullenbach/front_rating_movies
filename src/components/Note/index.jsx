/* eslint-disable react/prop-types */
import { Container } from "./styles";

import { Tag } from "../../components/Tag";
import { Stars } from "../../components/Stars";

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      <Stars rating={data.rating} />

      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
