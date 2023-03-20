import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieAPI from '../../services/apiFilms';
import holderactor from '../../images/holderactor.png';
import {
  Container,
  TitleCast,
  CastList,
  ActorCart,
  ActorPhoto,
  Info,
  ActorName,
  ActorInfo,
  InfoSpan,
} from './Cast.styled';

const Cast = () => {
  const [castInfo, setCastInfo] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    MovieAPI.getMovieCredits(movieId).then(({ cast }) => {
      const info = cast.reduce((acc, man) => {
        const profilePhoto = man.profile_path
          ? `https://image.tmdb.org/t/p/original/${man.profile_path}`
          : holderactor;
        const actor = {
          id: man.id,
          name: man.name,
          character: man.character,
          photo: profilePhoto,
          popularity: man.popularity,
        };
        return [...acc, actor];
      }, []);

      setCastInfo(info);
    });
  }, [movieId]);

  if (!castInfo) return;

  const areActors = Boolean(castInfo.length);
  return (
    <Container>
      <TitleCast>Cast</TitleCast>
      {!areActors && <p>No information about the cast</p>}
      {areActors && (
        <CastList>
          {castInfo.map(({ id, name, character, photo, popularity }) => (
            <ActorCart key={id}>
              <ActorPhoto src={photo} alt={name} />

              <Info>
                <ActorName>{name}</ActorName>
                <ActorInfo>
                  <InfoSpan>Character:</InfoSpan> {character}
                </ActorInfo>
                <ActorInfo>
                  <InfoSpan>Popularity:</InfoSpan> {popularity}
                </ActorInfo>
              </Info>
            </ActorCart>
          ))}
        </CastList>
      )}
    </Container>
  );
};

export default Cast;
