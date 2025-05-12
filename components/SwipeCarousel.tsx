import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  { src: "/gimsoc_logo.svg", alt: "Image 1", caption: "" },
  { src: "/gimsoc_logo.svg", alt: "Image 3", caption: "" },
  { src: "/gimsoc_logo.svg", alt: "Image 2", caption: "" },
  { src: "/gimsoc_logo.svg", alt: "Image 4", caption: "" },
  { src: "/gimsoc_logo.svg", alt: "Image 5", caption: "" },
];

export default function SwipeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const goToPrevious = () => {
    setDirection('left');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection('right');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const getAnimationClass = (index: number) => {
    if (!isAnimating) return '';
    if (index === currentIndex) {
      return direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left';
    }
    return '';
  };

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden h-[250px] sm:h-[400px] md:h-[500px] bg-gray-800">
        {/* Carousel Images */}
        <div className="relative h-full w-full">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out
                ${index === currentIndex ? 'opacity-100' : 'opacity-0'} 
                ${getAnimationClass(index)}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm sm:text-base md:text-lg font-medium">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white transition duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white transition duration-300"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out
                ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
