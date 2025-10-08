import { useState, useEffect } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [gallery1, gallery2, gallery3];

export const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto group">
      <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-700 hover:scale-[1.02]">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              idx === currentIndex
                ? "opacity-100 scale-100 rotate-0 translate-x-0"
                : idx === (currentIndex - 1 + images.length) % images.length
                ? "opacity-0 scale-95 -translate-x-full -rotate-2"
                : "opacity-0 scale-95 translate-x-full rotate-2"
            }`}
          >
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full object-contain bg-gradient-to-br from-primary/5 to-secondary/10 transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-xl hover:bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl hover:shadow-primary/20 hover:scale-110 hover:rotate-12 border border-primary/20 hover:border-primary/40"
      >
        <ChevronLeft className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-xl hover:bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl hover:shadow-primary/20 hover:scale-110 hover:-rotate-12 border border-primary/20 hover:border-primary/40"
      >
        <ChevronRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>

      <div className="flex justify-center gap-3 mt-8">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => !isAnimating && setCurrentIndex(idx)}
            className={`relative rounded-full transition-all duration-500 hover:scale-125 group ${
              idx === currentIndex
                ? "w-10 h-3 bg-gradient-to-r from-primary to-primary/70 shadow-lg shadow-primary/30"
                : "w-3 h-3 bg-border hover:bg-primary/50 hover:shadow-md"
            }`}
          >
            {idx === currentIndex && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/70 animate-pulse opacity-60"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
