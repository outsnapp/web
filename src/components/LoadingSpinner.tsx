import { useEffect, useState } from "react";

export const LoadingSpinner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl">
      <div className="relative">
        {/* Main Spinner */}
        <div className="relative w-20 h-20">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-spin">
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-pulse"></div>
          </div>
          
          {/* Inner Ring */}
          <div className="absolute inset-2 rounded-full border-4 border-secondary/30 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-b-primary/60"></div>
          </div>
          
          {/* Center Dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse animate-bounce"></div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute -top-8 -left-8 w-4 h-4 bg-primary/40 rounded-full animate-float"></div>
        <div className="absolute -top-6 -right-6 w-3 h-3 bg-primary/30 rounded-full animate-float animate-delay-200"></div>
        <div className="absolute -bottom-6 -left-6 w-2 h-2 bg-primary/50 rounded-full animate-float animate-delay-400"></div>
        <div className="absolute -bottom-8 -right-8 w-3 h-3 bg-primary/40 rounded-full animate-float animate-delay-600"></div>
        
        {/* Loading Text */}
        <div className={`mt-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-primary font-medium animate-pulse">Loading Art...</p>
        </div>
      </div>
    </div>
  );
};
