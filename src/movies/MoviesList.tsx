import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movies.model";

export default function MoviesList(props: moviesListProps) {
  return (
    <div>
      {props.movies.map((movie) => (
        <IndividualMovie {...movie} key={movie.id} />
      ))}
    </div>
  );
}

interface moviesListProps {
  movies: movieDTO[];
}
