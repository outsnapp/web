import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import yellowstoneBanner from "@/assets/yellowstone-banner.jpg";

export const EventCard = () => {
  return (
    <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 animate-fade-in-up border-0 bg-card">
      <div className="relative h-48 overflow-hidden">
        <img
          src={yellowstoneBanner}
          alt="Yellowstone Workshop"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-6 right-6">
          <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-lg">
            ARTIST'S ADVENTURE WORKSHOP 2026
          </h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-muted-foreground mb-4">
          Join me for an unforgettable artistic journey through Yellowstone National Park.
          Capture the majesty of wildlife and landscapes through your own artistic lens.
        </p>
        <Button
          variant="outline"
          className="w-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          Learn More
        </Button>
      </div>
    </Card>
  );
};
