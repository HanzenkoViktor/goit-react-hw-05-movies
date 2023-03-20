import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import MovieAPI from '../../services/apiFilms';
import MovieList from 'components/MovieList';
import holder from '../../images/holder.png';
import { Container, Btn, FormSearch, Input } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams('');
  const movieName = searchParams.get('query') ?? ``;

  useEffect(() => {
    if (!movieName) return;

    MovieAPI.searchMovie(movieName).then(movies => {
      const info = movies.reduce((acc, movie) => {
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
        return [...acc, film];
      }, []);

      setMovies(info);
    });
  }, [movieName]);

  const onFormSubmit = event => {
    event.preventDefault();

    const searchQuery = event.target.elements.query.value;

    setSearchParams({ query: searchQuery });
  };

  return (
    <main>
      <Container>
        <FormSearch onSubmit={onFormSubmit}>
          <Btn type="submit">
            <GoSearch />
          </Btn>
          <Input
            type="text"
            name="query"
            placeholder="Search films"
            value={searchParams.query}
          />
        </FormSearch>
        {!movies ? (
          <p>Enter a request to get the movies you are interested in.</p>
        ) : movies.length === 0 ? (
          <p>We did not find any movies for your request.</p>
        ) : (
          <MovieList movies={movies} />
        )}
      </Container>
    </main>
  );
};

export default Movies;
