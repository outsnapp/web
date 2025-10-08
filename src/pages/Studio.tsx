import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

const Studio = () => {
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
              MY STUDIO
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Step inside the creative space where wildlife art comes to life. 
              A glimpse into my artistic process and inspiration.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="overflow-hidden animate-fade-in-up">
              <div className="aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200&q=80"
                  alt="Studio workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
            
            <div className="flex flex-col justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-bold mb-6 text-foreground">The Creative Space</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                My studio is a sanctuary where nature and art converge. Surrounded by reference photos, 
                sketches, and the tools of my trade, this is where each wildlife portrait begins its journey.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Natural light floods through large windows, providing the perfect conditions for color 
                accuracy and detail work. Every element is carefully arranged to inspire creativity and 
                maintain focus on bringing these magnificent creatures to life.
              </p>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="p-6 text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Digital Tools</h3>
              <p className="text-muted-foreground text-sm">
                Professional Wacom tablet, high-end monitors, and the latest digital painting software
              </p>
            </Card>

            <Card className="p-6 text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Reference Library</h3>
              <p className="text-muted-foreground text-sm">
                Extensive collection of wildlife photography and anatomy books for accurate details
              </p>
            </Card>

            <Card className="p-6 text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Nature-Inspired</h3>
              <p className="text-muted-foreground text-sm">
                Plants and natural elements throughout to maintain connection with the subject matter
              </p>
            </Card>
          </div>

          <div
            className={`bg-secondary/50 rounded-2xl p-12 text-center mt-20 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Virtual Studio Tours
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join me for an exclusive behind-the-scenes look at my creative process. 
              Available for workshops and online tutorials.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Studio;
