import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  ListMovies,
  ListItemMovie,
  PosterMovie,
  TitleMovie,
  LinkDiv,
} from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ListMovies>
        {movies.map(({ poster_path, id, title }) => (
          <ListItemMovie key={id}>
            <LinkDiv to={`/movies/${id}`} state={{ from: location }}>
              <PosterMovie src={poster_path} alt={title} />
              <TitleMovie>{title}</TitleMovie>
            </LinkDiv>
          </ListItemMovie>
        ))}
      </ListMovies>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.any.isRequired,
    })
  ),
};

export default MovieList;
