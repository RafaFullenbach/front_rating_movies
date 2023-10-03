/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { Tag } from "../../components/Tag";

export function Note({ data, ...rest }) {
  let stars = [];
  let rating = data.rating;
  let restStars = 5 - data.rating;
  let id = 1;

  while (rating > 0) {
    if (rating < 1) {
      stars.push(<BsStarHalf size={12} key={id++} />);
      rating--;
    } else {
      stars.push(<BsStarFill size={12} key={id++} />);
      rating--;
    }
  }

  while (restStars >= 1) {
    stars.push(<BsStar size={12} key={id++} />);
    restStars--;
  }

  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      {<div>{stars}</div>}

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
