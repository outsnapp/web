import { Card } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
}

export const ProductCard = ({ id, name, image, category }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 border-0 animate-fade-in-up cursor-pointer">
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{category}</p>
          <h3 className="text-lg font-bold text-foreground">{name}</h3>
        </div>
      </div>
    </Card>
  );
};
