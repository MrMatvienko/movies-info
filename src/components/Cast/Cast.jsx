import { getCastMovie } from 'API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem, CastList, ImgCast } from './Cast.styled';
import { DefaultImage } from 'components/DefaultImage/DefaultImage';

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
              {profile_path ? (
                <ImgCast
                  src={`https://image.tmdb.org/t/p/original${profile_path}`}
                  alt={original_name}
                />
              ) : (
                <DefaultImage />
              )}
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
