import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const artworks = [
  {
    id: 1,
    title: "Pride of the Savanna",
    year: "2024",
    medium: "Digital Painting",
    image: gallery1,
    description: "A majestic lion family captured in golden hour light"
  },
  {
    id: 2,
    title: "Winter Sentinel",
    year: "2024",
    medium: "Digital Painting",
    image: gallery2,
    description: "A lone wolf standing guard in a snowy forest"
  },
  {
    id: 3,
    title: "Forest Wanderer",
    year: "2023",
    medium: "Digital Painting",
    image: gallery3,
    description: "A bear exploring its woodland territory"
  },
  {
    id: 4,
    title: "Mountain Majesty",
    year: "2024",
    medium: "Digital Painting",
    image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?w=1200&q=80",
    description: "An eagle soaring over mountain peaks"
  },
  {
    id: 5,
    title: "Arctic Spirit",
    year: "2023",
    medium: "Digital Painting",
    image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1200&q=80",
    description: "Polar bear in the frozen arctic wilderness"
  },
  {
    id: 6,
    title: "Midnight Hunter",
    year: "2024",
    medium: "Digital Painting",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=80",
    description: "A powerful tiger prowling through moonlit jungle"
  },
  {
    id: 7,
    title: "Desert Grace",
    year: "2023",
    medium: "Digital Painting",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=1200&q=80",
    description: "African wildlife in their natural habitat"
  },
  {
    id: 8,
    title: "Ocean Guardian",
    year: "2024",
    medium: "Digital Painting",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
    description: "Orca whale in deep blue waters"
  },
  {
    id: 9,
    title: "Twilight Watch",
    year: "2023",
    medium: "Digital Painting",
    image: "https://images.unsplash.com/photo-1605467123736-79e1c5f5a44a?w=1200&q=80",
    description: "Owl perched in evening light"
  },
];

const Art = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedArt, setSelectedArt] = useState<typeof artworks[0] | null>(null);

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
              ARTWORK GALLERY
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore a curated collection of wildlife art celebrating the beauty and power of nature's creatures.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {artworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedArt(artwork)}
              >
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{artwork.title}</h3>
                      <p className="text-sm text-white/90 mb-1">{artwork.medium}</p>
                      <p className="text-xs text-white/70">{artwork.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedArt && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
              onClick={() => setSelectedArt(null)}
            >
              <div className="max-w-5xl w-full bg-background rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <img
                    src={selectedArt.image}
                    alt={selectedArt.title}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4 text-foreground">{selectedArt.title}</h2>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-semibold">Medium:</span> {selectedArt.medium}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      <span className="font-semibold">Year:</span> {selectedArt.year}
                    </p>
                    <p className="text-foreground leading-relaxed mb-6">{selectedArt.description}</p>
                    <button
                      onClick={() => setSelectedArt(null)}
                      className="self-start px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div
            className={`bg-secondary/50 rounded-2xl p-12 text-center mt-20 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Commission Your Own Piece
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interested in a custom wildlife portrait? I accept a limited number of commissions each year. 
              Contact me to discuss your vision.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Art;
