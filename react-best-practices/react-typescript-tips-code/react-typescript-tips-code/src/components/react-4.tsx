import { Helmet, HelmetProvider } from "react-helmet-async";

interface PreloadImagesProps {
  images: string[];
}

const PreloadImages = ({ images }: PreloadImagesProps) => {
  return (
    <Helmet>
      {images.map((src, index) => (
        <link key={index} rel="preload" as="image" href={src} />
      ))}
    </Helmet>
  );
};

export default PreloadImages;

const MyComponent = () => {
  const highPriorityImages = [
    "path/to/image1.jpg",
    "path/to/image2.jpg",
    "path/to/image3.jpg",
  ];

  return (
    <HelmetProvider>
      <div>
        <PreloadImages images={highPriorityImages} />
        <h1>Welcome to my lovely application!</h1>
        <img src="path/to/image1.jpg" alt="Image 1" />
        <img src="path/to/image2.jpg" alt="Image 2" />
        <img src="path/to/image3.jpg" alt="Image 3" />
      </div>
    </HelmetProvider>
  );
};
