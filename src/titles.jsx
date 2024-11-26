import { createContext, useContext, useEffect, useRef, useState } from 'react';
import getTrailerSrc from './trailer';

const FilmsContext = createContext();

const getTitles = () => {
  return [
    { title: 'Vertigo', id: 426 },
    { title: 'The Shining', id: 694 },
    { title: 'The Silence of the Lambs', id: 274 },
    { title: 'The Thing', id: 1091 },
    { title: 'Little Miss Shine', id: 773 },
    { title: '2001: A Space Odyssey', id: 62 },
    { title: 'Pulp Fiction', id: 680 },
    { title: 'Badlands', id: 3133 },
    { title: 'Jaws', id: 578 },
    { title: 'Apocalypse Now', id: 28 },
    { title: 'Beau Travail', id: 14626 },
    { title: 'The Graduate', id: 37247 },
  ];
};

const filmsPromise = (async () => {
  const promises = getTitles().map(async (film) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${film.id}?api_key=b2e8b9fd7484d2460a372d9ccfcb104c&append_to_response=videos`,
        { mode: 'cors' },
      );
      const data = await response.json();
      const posterPath = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
      const backdropPath = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;
      const videoSrc = getTrailerSrc(data);

      return {
        ...film,
        imgSrc: posterPath,
        backdropImgSrc: backdropPath,
        vidSrc: videoSrc,
        title: data.original_title,
        description: data.overview,
        country: data.production_countries[0].name,
        year: data.release_date.split('-')[0],
      };
    } catch (error) {
      console.error(`Error fetching poster for ${film.id}:`, error);
      return { ...film, imgSrc: null, vidSrc: null };
    }
  });

  return await Promise.all(promises);
})(); // IIFE

export function FilmsProvider({ children }) {
  const [films, setFilms] = useState([]);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (fetchedRef.current) return; // Prevent double state updates
    fetchedRef.current = true;

    const fetchData = async () => {
      const filmsDetails = await filmsPromise;
      setFilms(filmsDetails);
    };

    fetchData();
  }, []);

  return (
    <FilmsContext.Provider value={films}>{children}</FilmsContext.Provider>
  );
}

export function useFilms() {
  return useContext(FilmsContext);
}
