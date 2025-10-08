import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useEffect, useState } from "react";

const brushProducts = [
  {
    id: "brush-1",
    name: "Wildlife Artist's Master Brush Set",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80",
    category: "Digital Brushes",
    description: "Complete set of 50+ professional wildlife painting brushes for digital artists"
  },
  {
    id: "brush-2",
    name: "Fur & Texture Brush Pack",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1572364161439-a9682a5e8e1d?w=800&q=80",
    category: "Digital Brushes",
    description: "Specialized brushes for creating realistic fur and animal textures"
  },
  {
    id: "brush-3",
    name: "Landscape & Nature Collection",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    category: "Digital Brushes",
    description: "Perfect for painting natural environments and wildlife habitats"
  },
  {
    id: "brush-4",
    name: "Portrait & Detail Brushes",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    category: "Digital Brushes",
    description: "Fine detail brushes for capturing animal expressions and features"
  },
  {
    id: "brush-5",
    name: "Watercolor Wildlife Set",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
    category: "Digital Brushes",
    description: "Beautiful watercolor-style brushes for soft, artistic wildlife paintings"
  },
  {
    id: "brush-6",
    name: "Complete Pro Bundle",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    category: "Digital Brushes",
    description: "All brush sets combined with exclusive bonus content"
  },
];

const BrushSet = () => {
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
              BRUSH SETS
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional digital brushes crafted for wildlife artists. Perfect for creating stunning, 
              realistic animal portraits and nature scenes in Photoshop and Procreate.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {brushProducts.map((product, index) => (
              <div
                key={product.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div
            className={`bg-secondary/50 rounded-2xl p-12 text-center mt-20 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Need Help Choosing?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Not sure which brush set is right for you? Check out our tutorials to see these brushes in action, 
              or contact us for personalized recommendations.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BrushSet;
