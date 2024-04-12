import { getReviewsMovie } from 'API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Text, TitleAuthor, WraperList } from './Reviews..styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const Reviews = await getReviewsMovie(movieId);
        setReviews(Reviews);
      } catch (e) {
        console.log(e);
      }
    };
    fetchReviews();
  }, [movieId]);

  return reviews.length === 0 ? (
    <h3>No Reviews.</h3>
  ) : (
    <WraperList>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <TitleAuthor>
            <TitleAuthor>Author:</TitleAuthor> {author}
          </TitleAuthor>
          <Text>{content}</Text>
        </li>
      ))}
    </WraperList>
  );
};
