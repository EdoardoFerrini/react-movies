import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexActors from "./actors/IndexActors";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenres from "./genres/IndexGenres";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";
import LandingPage from "./movies/LandingPage";
import CreateMovieTheater from "./movietheaters/CreateMovieTheater";
import EditMovieTheater from "./movietheaters/EditMovieTheater";
import IndexMovieTheaters from "./movietheaters/IndexMovieTheaters";

const routes = [
  { path: "/genres", component: IndexGenres },
  { path: "/genres/create", component: CreateGenre },
  { path: "/genres/edit", component: EditGenre },

  { path: "/actors", component: IndexActors },
  { path: "/actors/create", component: CreateActor },
  { path: "/actors/edit", component: EditActor },

  { path: "/movietheater", component: IndexMovieTheaters },
  { path: "/movietheater/create", component: CreateMovieTheater },
  { path: "/movietheater/edit", component: EditMovieTheater },

  { path: "/movies/create", component: CreateMovie },
  { path: "/movies/edit", component: EditMovie },
  { path: "/movies/filter", component: FilterMovies },

  { path: "/", component: LandingPage },
];

export default routes;
