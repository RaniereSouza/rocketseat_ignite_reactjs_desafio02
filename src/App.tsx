import { useMovies } from './hooks/useMovies';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  const {
          genres,
          selectedGenre,
          selectedGenreId, setSelectedGenreId,
          movies
        } = useMovies();

  return (
    <div className="app-container">
      <SideBar
        genres={genres}
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
      />

      <Content 
        selectedGenreTitle={selectedGenre.title}
        movies={movies}
      />
    </div>
  );
}