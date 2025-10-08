import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useEffect, useState } from "react";

// TODO: Replace these placeholder entries with your actual print data
// Upload your 13 images to the public/prints/ folder and update the paths below
const printProducts = [
  {
    id: "print-1",
    name: "Red Panda",
    image: "/prints/print-1.jpg",
    category: "Fine Art Print",
  },
  {
    id: "print-2",
    name: "Elephant and Cub",
    image: "/prints/print-2.jpg",
    category: "Fine Art Print",
  },
  {
    id: "print-3",
    name: "Leopard Trails",
    image: "/prints/print-3.jpg",
    category: "Fine Art Print",
  },
  {
    id: "print-4",
    name: "Big Horn RAM",
    image: "/prints/print-4.jpg",
    category: "Fine Art Print",
  },
  {
    id: "print-5",
    name: "Bengal Tiger",
    image: "/prints/print-5.jpg",
    category: "Fine Art Print",
  },
  {
    id: "print-6",
    name: "Kashmir Hangul",
    image: "/prints/print-6.jpg",
    category: "Fine Art Print",
  },
  {
    id: "print-7",
    name: "Zebra Zeal",
    image: "/prints/print-7.jpg",
    category: "Fine Art Print",
  },
  {
    id: "print-8",
    name: "Horse",
    image: "/prints/print-8.jpg",
    category: "Fine Art Print",
  },
  {
    id: "print-9",
    name: "Bull Elk",
    image: "/prints/print-9.jpg",
    category: "Fine Art Print",
  },
  {
    id: "print-10",
    name: "Oryx",
    image: "/prints/print-10.jpg",
    category: "Fine Art Print",
  },
  {
    id: "print-11",
    name: "Royal Bengal Tiger",
    image: "/prints/print-11.jpg",
    category: "Fine Art Print",
  },
  {
    id: "print-12",
    name: "Cheetah and Cubs",
    image: "/prints/print-12.jpg",
    category: "Fine Art Print",
  },
];

const Prints = () => {
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
              FINE ART PRINTS
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bring the beauty of wildlife into your home with museum-quality prints. 
              Each piece is carefully printed on archival paper to ensure lasting beauty.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {printProducts.map((product, index) => (
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
              Custom Sizes Available
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              All prints are available in multiple sizes and formats. Contact us for custom framing 
              options and large-scale installations.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Prints;
