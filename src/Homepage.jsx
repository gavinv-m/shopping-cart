import styles from './Homepage.module.css';

// Exports to routes.jsx
export default function Homepage() {
  const images = [
    {
      src: '../images/collage.png',
      alt: 'A collage featuring various movie posters',
      heading: 'The Collection',
      text: `Explore an eclectic collage of cinematic treasures handpicked for every kind of movie enthusiast. 
      From timeless classics to groundbreaking modern gems, The Collection offers something for everyone.`,
      buttonText: 'Shop the Collection',
    },
    {
      src: '../images/beau.jpg',
      alt: 'Several men in military attire standing in a circle,',
      heading: 'Art House Cinema',
      text: `Delve into the world of Art House Cinema, where storytelling meets innovation. 
      Discover a curated selection of films that challenge conventions and celebrate artistic expression.`,
      buttonText: 'Explore Art House',
    },
    {
      src: '../images/graduate.jpg',
      alt: 'A man stands in front of a bed, with a television visible in the background',
      heading: 'New Hollywood',
      text: `Experience the revolution of New Hollywood, where daring directors and unforgettable narratives redefined filmmaking. 
      This collection showcases the creativity and boldness of the 70s and beyond.`,
      buttonText: 'Enter New Hollywood',
    },
    {
      src: '../images/vert.webp',
      alt: 'A man in a suit examines paintings in a museum',
      heading: 'Classic Cinema',
      text: `Step back in time with our Classic Cinema collection, featuring the golden age of film. 
      Relive the magic of enduring masterpieces that shaped the history of storytelling on screen.`,
      buttonText: 'Discover Classics',
    },
  ];

  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <section key={index}>
          <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
          <div className={styles.contentBlock}>
            <h1>{image.heading}</h1>
            <p>{image.text}</p>
            <button type="button">{image.buttonText}</button>
          </div>
        </section>
      ))}
    </div>
  );
}
