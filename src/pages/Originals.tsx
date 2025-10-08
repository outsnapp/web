import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useMemo, useState } from "react";

type Artwork = {
  id: number;
  title: string;

  image: string;
  category: string;
  
};

// TODO: Replace these placeholder entries with your actual artwork data
// Upload your 16 images to the public/originals/ folder and update the paths below
const initialArtworks: Artwork[] = [
  { id: 1, title: "White Royal Bengal", image: "/originals/original-1.jpg", category: "Wildlife"},
  { id: 2, title: "Red Panda", image: "/originals/original-2.jpg", category: "Wildlife"  },
  { id: 3, title: "Elephant",  image: "/originals/original-3.jpg", category: "Wildlife" },
  { id: 4, title: "Dendrobium Nobile Orchid",  image: "/originals/original-4.jpg", category: "Flowers" },
  { id: 5, title: "Rhodedenderon Niveum",  image: "/originals/original-5.jpg", category: "Flowers" },
  { id: 6, title: "Blood Pheasant",  image: "/originals/original-6.jpg", category: "Birds" },
  { id: 7, title: "Cheetah and Cubs",  image: "/originals/original-7.jpg", category: "Wildlife" },
  { id: 8, title: "Oryx",  image: "/originals/original-8.jpg", category: "Wildlife" },
  { id: 9, title: "Bull Elk",  image: "/originals/original-9.jpg", category: "Wildlife" },
  { id: 10, title: "Zebra Zeal",  image: "/originals/original-10.jpg", category: "Wildlife"},
  { id: 11, title: "Big Horn RAM",  image: "/originals/original-11.jpg", category: "Wildlife" },
  { id: 12, title: "Bengal Tiger",  image: "/originals/original-12.jpg", category: "Wildlife" },
  { id: 13, title: "Kashmir Hangul", image: "/originals/original-13.jpg", category: "Wildlife" },
  { id: 14, title: "Leopard Trails",  image: "/originals/original-14.jpg", category: "Wildlife" },
  { id: 15, title: "Elephant and Cub",  image: "/originals/original-15.jpg", category: "Wildlife"},
  { id: 16, title: "Red Panda",  image: "/originals/original-16.jpg", category: "Wildlife" },
];

const categories = ["All", "Wildlife", "Flowers", "Birds"] as const;

const Originals = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = useState<Artwork | null>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const artworks = useMemo(() => {
    if (activeCategory === "All") return initialArtworks;
    return initialArtworks.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-40 pb-20">
        <section className="container mx-auto px-4">
          <div
            className={`text-center mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">ORIGINALS</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              One-of-a-kind original artworks. Availability is limited and subject to change.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-full text-sm border transition-all ${
                  activeCategory === c ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-secondary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {artworks.map((art, index) => (
              <div
                key={art.id}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.06}s` }}
                onClick={() => setSelected(art)}
              >
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{art.title}</h3>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selected && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
              onClick={() => setSelected(null)}
            >
              <div className="max-w-5xl w-full bg-background rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <img src={selected.image} alt={selected.title} className="w-full h-auto rounded-lg" />
                  <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4 text-foreground">{selected.title}</h2>
                    <a href="/contact" className="self-start px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">Enquire</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Originals;


