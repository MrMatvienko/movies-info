import { getCastMovie } from 'API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem, CastList, ImgCast } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await getCastMovie(movieId);
        setCast(cast);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCast();
  }, [movieId]);
  return (
    <>
      {
        <CastList>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <CastItem key={id}>
              <ImgCast
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : ''
                }
                alt={original_name}
                width={80}
                height={120}
              />
              <div>
                <p>
                  <span> Actor:</span> {original_name}
                </p>
                <p>
                  <span>Character:</span> {character}
                </p>
              </div>
            </CastItem>
          ))}
        </CastList>
      }
    </>
  );
};
