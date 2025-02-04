import IndividualMovie from "./movies/IndividualMovie";
import { movieDTO } from "./movies/movies.model";
import MoviesList from "./movies/MoviesList";

function App() {
  const inTheaters: movieDTO[] = [
    {
      id: 1,
      title: "Spider-Man: Far From Home",
      poster:
        "https://posterspy.com/wp-content/uploads/2019/07/Farfromhome3D.jpg",
    },
    {
      id: 2,
      title: "Interstellar",
      poster:
        "https://posterspy.com/wp-content/uploads/2024/12/INTERSTELLAR-NO-MUR.jpg",
    },
  ];

  const upcomingReleases: movieDTO[] = [
    {
      id: 3,
      title: "Inception",
      poster: "https://posterspy.com/wp-content/uploads/2024/05/inception.jpg",
    },
  ];

  return (
    <>
      <h2>In Theathers</h2>
      <MoviesList movies={inTheaters} />
      <h2>Upcoming Releases</h2>
      <MoviesList movies={upcomingReleases} />
    </>
  );
}

export default App;
