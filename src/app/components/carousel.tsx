import { useState, useEffect } from "react";

type ImageType = {
  src: string;
  alt: string;
};

interface CarouselProps {
  images: ImageType[];
  autoplayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, autoplayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      handleNextClick();
    }, autoplayInterval);

    return () => clearInterval(autoplayTimer);
  }, [currentIndex, autoplayInterval]);

  const handlePrevClick = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full ">
      {/* carousel slides */}
      <div className="flex transition-transform duration-500 " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="flex flex-shrink-0 w-full  justify-center items-center">
            <img src={image.src} alt={image.alt} className="xl:w-[450px] xl:h-[350px] md:w-[300px] md:h-[300px] w-[230px] h-[230px] object-cover rounded-[28px] overflow-hidden" />
          </div>
        ))}
      </div>

      {/* prev button */}
      <button className="absolute left-2 xl:left-5 top-1/2 -translate-y-1/2 bg-[var(--bgcard)] rounded-full p-2 hover:bg-gray-400 transition" onClick={handlePrevClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* next button */}
      <button className="absolute right-2 xl:right-5 top-1/2 -translate-y-1/2 bg-[var(--bgcard)] rounded-full p-2 hover:bg-gray-400 transition" onClick={handleNextClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* dots */}
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <button key={index} className={`mx-1 w-3 h-3 rounded-full ${index === currentIndex ? "bg-[var(--primary)]" : "bg-[var(--secondaryhover)]"}`} onClick={() => handleDotClick(index)} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
