import { useEffect, useState } from "react";
import { landingPageDTO } from "./movies/movies.model";
import MoviesList from "./movies/MoviesList";
import Menu from "./Menu";

function App() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
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
        ],
        upcomingReleases: [
          {
            id: 3,
            title: "Inception",
            poster:
              "https://posterspy.com/wp-content/uploads/2024/05/inception.jpg",
          },
        ],
      });
    }, 4000);
    return () => clearTimeout(timerId);
  });

  return (
    <>
    <Menu />
    <div className="container">
      <h2>In Theathers</h2>
      <MoviesList movies={movies.inTheaters} />
      <h2>Upcoming Releases</h2>
      <MoviesList movies={movies.upcomingReleases} />
    </div>
    </>
  );
}

export default App;
