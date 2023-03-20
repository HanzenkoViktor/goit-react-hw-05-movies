import { useState, useEffect } from 'react';
import MovieAPI from '../../services/apiFilms';
import MovieList from 'components/MovieList';
import holder from '../../images/holder.png';
import Loader from 'components/Loader';
import { Container } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    MovieAPI.getTrending('week').then(movies => {
      const info = movies.reduce((acc, movie) => {
        setIsLoading(true);
        const poster = movie.poster_path
          ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
          : holder;
        const film = {
          id: movie.id,
          title: movie.title,
          release_date: movie.release_date,
          poster_path: poster,
          vote_average: movie.vote_average,
        };
        setIsLoading(false);
        return [...acc, film];
      }, []);

      setMovies(info);
    });
  }, []);

  if (!movies) return;

  return (
    <Container>
      <h1>Trending today</h1>
      {isLoading ? <Loader /> : <MovieList movies={movies} />}
    </Container>
  );
};

export default Home;
