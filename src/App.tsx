
import IndividualMovie from './movies/individualMovie'
import { movieDto } from './movies/movies.model'

function App() {

  const testMovie: movieDto = {
    id: 1,
    title: 'Spiderman: Far From Home',
    poster: 'https://pad.mymovies.it/filmclub/2018/12/052/locandinapg2.jpg'
  }
  return (
    <>
      <IndividualMovie {...testMovie} />
    </>
  )
}

export default App
