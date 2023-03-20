import MovieAPI from '../../services/apiFilms';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import holder from '../../images/holder.png';
import {
  Container,
  StyledNavLink,
  CartFilm,
  ImgDiv,
  Images,
  InfoDiv,
  Title,
  Info,
  InfoOver,
  SpanInfo,
  InfoBotnDiv,
  InfoNavLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const goBackLink = location.state?.from ?? '/';

  useEffect(() => {
    MovieAPI.getMovieById(movieId).then(movie => {
      const poster = movie.poster_path
        ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
        : holder;
      const info = {
        title: movie.title,
        poster_path: poster,
        genres: movie.genres.map(genre => genre.name).join(', '),
        release_date: movie.release_date,
        overview: movie.overview,
        vote_average: movie.vote_average,
      };
      setMovieDetails(info);
    });
  }, [movieId]);

  if (!movieDetails) return;

  const { title, poster_path, genres, release_date, overview, vote_average } =
    movieDetails;

  const areGenres = Boolean(genres.length);
  const year = release_date ? release_date.split('-')[0] : '';
  const isReleaseDate = Boolean(release_date);
  const rating = vote_average.toFixed(1);

  return (
    <main>
      <Container>
        <StyledNavLink to={goBackLink} title="Go back">
          &#60;&#60; Go back
        </StyledNavLink>

        <CartFilm>
          <ImgDiv>
            <Images src={poster_path} alt={title} />
          </ImgDiv>

          <InfoDiv>
            <Title>{title}</Title>
            {isReleaseDate && (
              <Info>
                <SpanInfo>Release date:</SpanInfo> {year}
              </Info>
            )}
            <Info>
              <SpanInfo>Rating:</SpanInfo> {rating}
            </Info>
            {areGenres && (
              <Info>
                <SpanInfo>Genres:</SpanInfo> {genres}
              </Info>
            )}
            <InfoOver>
              <SpanInfo>Overview:</SpanInfo> {overview}
            </InfoOver>
            <InfoBotnDiv>
              <InfoNavLink to="cast" state={{ from: goBackLink }}>
                Cast
              </InfoNavLink>
              <InfoNavLink to="reviews" state={{ from: goBackLink }}>
                Reviews
              </InfoNavLink>
            </InfoBotnDiv>
          </InfoDiv>
        </CartFilm>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MovieDetails;
