export const Footer = () => {
  return (
    <footer className="border-t border-border bg-gradient-to-br from-background via-primary/5 to-secondary/20 py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="group animate-fade-in-up hover:scale-105 transition-all duration-500">
            <h4 className="font-bold mb-4 text-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              ABOUT
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
              Creating beautiful wildlife art that captures the essence of nature's majesty.
              Each piece tells a story of wonder and reverence for the natural world.
            </p>
          </div>
          
          <div className="group animate-fade-in-up animate-delay-200 hover:scale-105 transition-all duration-500">
            <h4 className="font-bold mb-4 text-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              CONTACT
            </h4>
            <p className="text-muted-foreground text-sm whitespace-pre-line group-hover:text-foreground/80 transition-colors duration-500">
              Sara Syeda
              {"\n"}Gurgaon,
              {"\n"}
              Haryana-122011
              {"\n\n"}
              INDIA
              {"\n\n"}
              Email :  ssggn77@gmail.com
              {"\n"}Tel     :  +91 7503600300
              {"\n"}Mob   : +91 7011191918
            </p>
          </div>
          
          <div className="group animate-fade-in-up animate-delay-400 hover:scale-105 transition-all duration-500">
            <h4 className="font-bold mb-4 text-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              NEWSLETTER
            </h4>
            <p className="text-muted-foreground text-sm mb-3 group-hover:text-foreground/80 transition-colors duration-500">
              Subscribe for updates on new artwork and workshops.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-secondary border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-500 hover:border-primary/50 hover:shadow-lg"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded hover:from-primary/90 hover:to-primary/70 transition-all duration-500 text-sm font-medium hover:scale-105 hover:shadow-lg">
                Subscribe
              </button>
            </div>
            <div className="flex gap-4 mt-4">
              <a 
                href="https://www.instagram.com/sarakhalid.art" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram" 
                className="group/icon p-2 rounded-full transition-all duration-500 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 hover:scale-110 hover:rotate-12"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover/icon:scale-110">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm5 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/sarakhalid.art/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook" 
                className="group/icon p-2 rounded-full transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-blue-600/20 hover:scale-110 hover:-rotate-12"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover/icon:scale-110">
                  <path d="M13 3h4a1 1 0 1 1 0 2h-3v3h3a1 1 0 1 1 0 2h-3v11h-3V10H8V8h3V6a3 3 0 0 1 3-3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm animate-fade-in-up animate-delay-600">
          © 2023 All Text and Images Copyright Sara Hues. All Rights Reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};
