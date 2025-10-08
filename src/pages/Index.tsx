import { Header } from "@/components/Header";
import { GalleryCarousel } from "@/components/GalleryCarousel";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 pb-16">
        <section className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-foreground animate-fade-in-up">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-pulse">
                WELCOME
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              Explore a world where art meets nature through stunning wildlife portraits
            </p>
          </div>

          <div className="mb-8 animate-scale-in">
            <GalleryCarousel />
          </div>

          <div
            className={`text-center mt-8 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex justify-center gap-6 flex-wrap">
              <Link to="/about" className="group">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground transition-all duration-500 hover:shadow-2xl hover:scale-110 hover:rotate-1 animate-bounce-in animate-delay-400 group-hover:animate-pulse"
                >
                  <span className="mr-2 group-hover:animate-spin">🎨</span>
                  About the Artist
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Button>
              </Link>
              <Link to="/originals" className="group">
                <Button
                  variant="outline"
                  size="lg"
                  className="transition-all duration-500 hover:shadow-2xl hover:scale-110 hover:-rotate-1 hover:bg-primary hover:text-primary-foreground animate-bounce-in animate-delay-600 border-2 hover:border-primary"
                >
                  <span className="mr-2 group-hover:scale-110 transition-transform duration-300">🖼️</span>
                  View Originals
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mt-32">
          <div
            className={`group bg-gradient-to-br from-secondary/50 via-primary/5 to-secondary/30 rounded-3xl p-12 text-center transition-all duration-1000 delay-700 hover:shadow-2xl hover:scale-[1.02] border border-primary/10 hover:border-primary/20 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-foreground animate-fade-in-up animate-delay-800">
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Discover More Art
                </span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-900">
                Browse the complete collection of original artworks and fine art prints.
              </p>
              <div className="flex gap-6 justify-center flex-wrap">
                <Link to="/originals" className="group">
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:bg-gradient-to-r hover:from-primary hover:to-primary/80 hover:text-primary-foreground transition-all duration-500 hover:shadow-2xl hover:scale-110 hover:rotate-1 animate-bounce-in animate-delay-1000 border-2 hover:border-primary"
                  >
                    <span className="mr-2 group-hover:animate-spin">🌟</span>
                    Explore Originals
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Button>
                </Link>
                <Link to="/prints" className="group">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground transition-all duration-500 hover:shadow-2xl hover:scale-110 hover:-rotate-1 animate-bounce-in animate-delay-1200"
                  >
                    <span className="mr-2 group-hover:animate-bounce">🛍️</span>
                    Shop Prints
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
