import { ShoppingCart, X, Minus, Plus, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export const CartDrawer = () => {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative hover:bg-secondary transition-all duration-300"
        >
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold animate-scale-in">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Shopping Cart</SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <ShoppingCart className="h-20 w-20 text-muted-foreground mb-4 opacity-50" />
            <p className="text-muted-foreground text-lg">Your cart is empty</p>
            <p className="text-sm text-muted-foreground mt-2">Add some beautiful art to get started!</p>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[calc(100vh-250px)] mt-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-secondary/50 rounded-lg animate-fade-in">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                      <p className="font-bold text-primary mt-1">${item.price.toFixed(2)}</p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="h-8 w-8 text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="mt-6 space-y-4">
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="space-y-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Checkout
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
