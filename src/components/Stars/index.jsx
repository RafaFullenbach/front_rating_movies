/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export function Stars({ rating = 0 }) {
  let stars = [];
  let restStars = 5 - rating;
  let id = 1;

  while (rating > 0) {
    if (rating < 1) {
      stars.push(<BsStarHalf key={id++} />);
      rating--;
    } else {
      stars.push(<BsStarFill key={id++} />);
      rating--;
    }
  }

  while (restStars >= 1) {
    stars.push(<BsStar key={id++} />);
    restStars--;
  }

  return <Container>{stars}</Container>;
}
