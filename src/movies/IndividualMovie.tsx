import { movieDto } from "./movies.model";
import "./IndividualMovie.css";

export default function IndividualMovie(props: movieDto) {
  const buildLink = () => `/movie/${props.id}`;
  return (
    <div className="movieDiv">
      <a href={buildLink()}></a>
      <img alt="Poster" src={props.poster}></img>
      <p>
        <a href={buildLink()}>{props.title}</a>
      </p>
    </div>
  );
}
