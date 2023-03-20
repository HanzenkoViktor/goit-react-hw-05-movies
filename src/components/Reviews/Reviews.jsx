import MovieAPI from 'services/apiFilms';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Title,
  Messj,
  RevList,
  RevItem,
  Name,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    MovieAPI.getMovieReviews(movieId).then(reviews => {
      const content = reviews.reduce((acc, review) => {
        const rev = {
          id: review.id,
          name: review.author,
          content: review.content,
        };
        return [...acc, rev];
      }, []);

      setReviews(content);
    });
  }, [movieId]);

  if (!reviews) return;

  const areReviews = Boolean(reviews.length);

  return (
    <Container>
      <Title>Reviews</Title>
      {!areReviews && <Messj>No review for this movie</Messj>}
      {areReviews && (
        <>
          <Messj>Found {reviews.length} review for this movie:</Messj>
          <RevList>
            {reviews.map(({ id, name, content }) => (
              <RevItem key={id}>
                <p>
                  <Name>Autor:</Name> {name}
                </p>
                <p>{content}</p>
              </RevItem>
            ))}
          </RevList>
        </>
      )}
    </Container>
  );
};

export default Reviews;
