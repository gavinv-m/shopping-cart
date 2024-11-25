// Exports to routes.jsx
export default function Homepage() {
  const images = [
    {
      src: '../images/collage.png',
      alt: 'A collage featuring various movie posters',
    },
    {
      src: '../images/beau-travail.jpg',
      alt: 'Several men in military attire standing in a circle,',
    },
    {
      src: '../images/graduate.jpg',
      alt: 'A man stands in front of a bed, with a television visible in the background',
    },
    {
      src: '../images/vertigo.jpg',
      alt: 'A man in a suit examines paintings in a museum',
    },
  ];

  return (
    <div>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image.src}
            alt={image.alt}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      ))}
    </div>
  );
}
