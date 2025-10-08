import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, Star } from "lucide-react";

const tutorials = [
  {
    id: 1,
    title: "Painting Realistic Fur Textures",
    duration: "45 min",
    level: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=800&q=80",
    description: "Master the techniques for creating lifelike fur textures in your wildlife art"
  },
  {
    id: 2,
    title: "Wildlife Eyes: Capturing the Soul",
    duration: "30 min",
    level: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?w=800&q=80",
    description: "Learn to paint expressive, realistic eyes that bring your animals to life"
  },
  {
    id: 3,
    title: "Color Theory for Nature Artists",
    duration: "60 min",
    level: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description: "Understanding color harmonies in natural environments and wildlife"
  },
  {
    id: 4,
    title: "Digital Painting Workflow",
    duration: "40 min",
    level: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
    description: "From sketch to finished piece - my complete digital painting process"
  },
  {
    id: 5,
    title: "Lighting and Atmosphere",
    duration: "50 min",
    level: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80",
    description: "Creating mood and depth through masterful use of light and shadow"
  },
  {
    id: 6,
    title: "Animal Anatomy Essentials",
    duration: "55 min",
    level: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
    description: "Understanding skeletal and muscular structure for accurate wildlife art"
  },
];

const Tutorials = () => {
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
              TUTORIALS
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn professional wildlife art techniques through detailed video tutorials. 
              From beginner fundamentals to advanced techniques.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {tutorials.map((tutorial, index) => (
              <Card
                key={tutorial.id}
                className="overflow-hidden group hover:shadow-xl transition-all duration-500 animate-fade-in-up border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-video overflow-hidden bg-secondary/30">
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                      <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock className="h-3 w-3 text-white" />
                    <span className="text-white text-xs font-medium">{tutorial.duration}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {tutorial.level}
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3 w-3 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">{tutorial.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tutorial.description}</p>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Watch Tutorial
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div
            className={`bg-secondary/50 rounded-2xl p-12 text-center mt-20 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Premium Membership
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get unlimited access to all tutorials, exclusive content, and downloadable resources. 
              Join a community of passionate wildlife artists.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Join Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tutorials;
