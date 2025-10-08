import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-foreground animate-fade-in-up">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-pulse">
                ABOUT
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              A journey of craft, patience, and deep respect for wildlife—told through art.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Image Section - Better positioned and centered */}
            <div className="flex items-center justify-center lg:justify-start order-2 lg:order-1">
              <div className="group relative w-[300px] h-[400px] lg:w-[380px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-700 hover:scale-105 hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img
                  src="/profile.jpg"
                  alt="Sara Khalid portrait"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-500 group-hover:from-black/60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-white">
                    <p className="text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-500">Sara Khalid</p>
                    <p className="text-xs opacity-75 group-hover:opacity-90 transition-opacity duration-500">Wildlife Artist</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
            </div>

            {/* Content Section - Better aligned with image */}
            <div className="flex flex-col justify-center animate-fade-in-up space-y-6 order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-2">
                <h2 className="text-4xl lg:text-5xl font-bold mb-2 text-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Sara Khalid
                </h2>
                <p className="text-sm uppercase tracking-wide text-primary font-medium mb-6">Wildlife Artist & Nature Enthusiast</p>
              </div>

              <div className="space-y-6">
                <div className="group p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/10 border border-primary/10 hover:shadow-2xl transition-all duration-500 hover:border-primary/30 hover:scale-[1.02] hover:-translate-y-1">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="font-semibold text-lg text-foreground mb-3 flex items-center relative z-10">
                    <span className="text-2xl mr-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">🎓</span>
                    Early Life & Education
                  </h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10 group-hover:text-foreground/90 transition-colors duration-500">
                    Born in Uttar Pradesh, India in 1982, Sara's artistic journey began in the heart of nature. 
                    Raised in a family deeply connected to wildlife and conservation, she developed an early appreciation 
                    for the intricate beauty of the natural world. She earned her Bachelor's in Fine Arts from 
                    AMU, Aligarh in 2003, where she honed her technical skills and artistic vision.
                  </p>
                </div>

                <div className="group p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/10 border border-primary/10 hover:shadow-2xl transition-all duration-500 hover:border-primary/30 hover:scale-[1.02] hover:-translate-y-1">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="font-semibold text-lg text-foreground mb-3 flex items-center relative z-10">
                    <span className="text-2xl mr-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">🎨</span>
                    Artistic Philosophy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10 group-hover:text-foreground/90 transition-colors duration-500">
                    For Sara, art is more than visual expression—it's a voice that interprets her deepest thoughts, 
                    hidden emotions, and strongest desires. Each piece tells a story drawn from personal experiences 
                    and genuine passion for wildlife conservation. Her work bridges the gap between artistic beauty 
                    and environmental awareness.
                  </p>
                </div>

                <div className="group p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/10 border border-primary/10 hover:shadow-2xl transition-all duration-500 hover:border-primary/30 hover:scale-[1.02] hover:-translate-y-1">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="font-semibold text-lg text-foreground mb-3 flex items-center relative z-10">
                    <span className="text-2xl mr-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">🖼️</span>
                    Creative Process
                  </h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10 group-hover:text-foreground/90 transition-colors duration-500">
                    Sara's artistic process involves meticulous attention to detail, capturing not just the physical 
                    appearance of her subjects, but their essence and spirit. She embraces the challenge of translating 
                    lines, shapes, light, and texture onto canvas, creating works that speak about the profound beauty 
                    that exists in our natural world.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/30 border border-primary/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-xs font-medium text-primary mb-2 flex items-center">
                    <span className="mr-1">🎨</span>
                    PRIMARY MEDIA
                  </div>
                  <div className="text-foreground font-medium">Oil, Acrylic, Watercolor, Charcoal</div>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/30 border border-primary/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-xs font-medium text-primary mb-2 flex items-center">
                    <span className="mr-1">📍</span>
                    BASED IN
                  </div>
                  <div className="text-foreground font-medium">Gurgaon, India</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-medium flex items-center justify-center group"
                >
                  <span className="mr-2">💬</span>
                  Get In Touch
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
                <Link
                  to="/originals"
                  className="px-8 py-4 border-2 border-primary/30 rounded-xl hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 hover:scale-105 font-medium flex items-center justify-center group"
                >
                  <span className="mr-2">🖼️</span>
                  View Gallery
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="group p-8 text-center rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/20 border border-primary/10 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-primary/30">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🎖️</div>
              <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                Exhibited & Featured
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Sara's work has been showcased in multiple prestigious group exhibitions and solo features, 
                earning recognition for her exceptional talent and unique perspective on wildlife art.
              </p>
            </div>
            
            <div className="group p-8 text-center rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/20 border border-primary/10 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-primary/30">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🖌️</div>
              <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                Detail-Driven Mastery
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Known for hyper-detailed realism that captures every texture, feather, and expression. 
                Sara's meticulous approach brings wildlife subjects to life with unprecedented authenticity.
              </p>
            </div>
            
            <div className="group p-8 text-center rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/20 border border-primary/10 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-primary/30">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🌿</div>
              <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                Nature-Inspired Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Extensive field studies and deep connection with nature inform every piece. 
                Sara's work captures not just appearance, but the very spirit and essence of wildlife.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;


