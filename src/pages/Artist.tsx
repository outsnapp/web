import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Mail, Instagram, Facebook, Award, Heart, Palette } from "lucide-react";

const Artist = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-40 pb-20">
        <section className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
              ABOUT THE ARTIST
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bringing the soul of wildlife to canvas through passion, patience, and precision.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl animate-fade-in-up">
              <img
                src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=1200&q=80"
                alt="Artist at work"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Carla Grace</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
                For over 15 years, I've dedicated my life to capturing the magnificence of wildlife through digital art. 
                Each piece is a labor of love, meticulously crafted to honor the beauty and spirit of the natural world.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                My journey began with traditional painting, but I found my true voice through digital media, which allows 
                me to achieve the level of detail and realism that brings these creatures to life on the canvas.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When I'm not in my studio, you'll find me in nature—photographing wildlife, studying their movements, 
                and deepening my understanding of the subjects I paint. This connection to nature is the foundation of 
                every artwork I create.
              </p>

              <div className="flex gap-4">
                <a
                  href="mailto:hello@carlagraceart.com"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-all duration-300"
                >
                  <Instagram className="h-4 w-4" />
                  Follow
                </a>
              </div>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="p-8 text-center animate-fade-in-up hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Award Winning</h3>
              <p className="text-muted-foreground">
                Recognized internationally for excellence in wildlife art and digital painting techniques
              </p>
            </Card>

            <Card className="p-8 text-center animate-fade-in-up hover:shadow-xl transition-all duration-500" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">15+ Years</h3>
              <p className="text-muted-foreground">
                Over a decade and a half of professional experience in wildlife and nature art
              </p>
            </Card>

            <Card className="p-8 text-center animate-fade-in-up hover:shadow-xl transition-all duration-500" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Conservation</h3>
              <p className="text-muted-foreground">
                Committed to wildlife conservation, donating portions of proceeds to preservation efforts
              </p>
            </Card>
          </div>

          <div
            className={`bg-secondary/50 rounded-2xl p-12 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Featured In</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
              <div className="text-2xl font-bold text-foreground">Wildlife Art Magazine</div>
              <div className="text-2xl font-bold text-foreground">Art & Nature</div>
              <div className="text-2xl font-bold text-foreground">Digital Artist</div>
              <div className="text-2xl font-bold text-foreground">National Gallery</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Artist;
