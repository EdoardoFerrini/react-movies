import IndividualMovie from "./movies/IndividualMovie";
import { movieDTO } from "./movies/movies.model";

function App() {
  const testMovie: movieDTO = {
    id: 1,
    title: "Spider-Man: Far From Home",
    poster:
      "https://posterspy.com/wp-content/uploads/2019/07/Farfromhome3D.jpg",
  };

  return (
    <>
      <IndividualMovie {...testMovie} />
    </>
  );
}

export default App;
