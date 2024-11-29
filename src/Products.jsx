import { useState, useEffect, useMemo } from 'react';
import Grid from './Grid';
import { useFilms } from './titles';
import styles from './Products.module.css';

// Exports to routes.jsx
export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const films = useFilms();

  // prettier-ignore
  const replacementRules = [
    {match: 'https://image.tmdb.org/t/p/w1280//rtVwkTqllcmyY4TVOycgVBHppWf.jpg', 
      replacement: '../images/kimNovak.webp'},  // Vertigo
    {match: 'https://image.tmdb.org/t/p/w1280//oVa4o0C5Fa7G36qHY48n3KHGBDX.jpg', 
      replacement: '../images/thing.webp'}, // The Thing
      {match: 'https://image.tmdb.org/t/p/w1280//hLq833CcqYjAluhFiSD2jQ5TpPh.jpg', 
        replacement: '../images/graduate.jpg'} // The Graduate
  ];

  const backdrops = useMemo(() => {
    if (!films?.length) return [];
    return films.map((film) => {
      const rule = replacementRules.find((rule) =>
        film.backdropImgSrc.includes(rule.match),
      );
      return {
        src: rule ? rule.replacement : film.backdropImgSrc,
        id: film.id,
      };
    });
  }, [films]);

  // Single effect to handle the slider
  useEffect(() => {
    if (backdrops.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backdrops.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [backdrops.length]);

  return (
    <div className={styles.productsPage}>
      <div className={`slider-container ${styles.sliderContainer}`}>
        {backdrops.map((backdrop, index) => {
          return (
            <img
              src={backdrop.src}
              alt="Movie backdrop poster"
              key={backdrop.id}
              style={{
                opacity: currentIndex === index ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
              }}
            ></img>
          );
        })}
      </div>
      <Grid></Grid>
    </div>
  );
}
