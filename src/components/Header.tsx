import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "ORIGINALS", path: "/originals" },
  { name: "PRINTS", path: "/prints" },
  { name: "CONTACT", path: "/contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-700 ease-out ${
        scrolled ? "bg-background/95 backdrop-blur-xl shadow-2xl border-b border-primary/10" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link 
            to="/" 
            className="group animate-fade-in hover:animate-pulse"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative overflow-hidden rounded-full p-2 transition-all duration-500 hover:bg-primary/5">
              <img
                src={logo}
                alt="sarakhalid.art"
                className="h-20 w-20 transition-all duration-700 hover:scale-110 hover:rotate-6 group-hover:drop-shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </Link>
          
          {/* Navigation Menu - Moved to top level */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <Link
                    to={item.path}
                    className={`text-sm font-medium tracking-wide transition-all duration-500 relative group hover:scale-105 transform ${
                      location.pathname === item.path
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100"></div>
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/70 transition-all duration-500 transform ${
                        location.pathname === item.path ? "w-full scale-x-100" : "w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/sarakhalid.art" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Instagram" 
              className="group relative p-2 rounded-full transition-all duration-500 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 hover:scale-110 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative z-10">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm5 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/sarakhalid.art/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Facebook" 
              className="group relative p-2 rounded-full transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-blue-600/20 hover:scale-110 animate-fade-in"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative z-10">
                <path d="M13 3h4a1 1 0 1 1 0 2h-3v3h3a1 1 0 1 1 0 2h-3v11h-3V10H8V8h3V6a3 3 0 0 1 3-3z"/>
              </svg>
            </a>
            <button
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary transition-colors ml-2"
            >
              <span className={`block h-0.5 w-6 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`}/>
              <span className={`block h-0.5 w-6 bg-current my-1 transition-opacity ${mobileOpen ? "opacity-0" : "opacity-100"}`}/>
              <span className={`block h-0.5 w-6 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}/>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="md:hidden border-t border-border">
            <ul className="flex flex-col items-stretch py-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 text-sm tracking-wide transition-colors ${
                      location.pathname === item.path
                        ? "text-primary"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="flex gap-4 px-4 py-3">
                <a href="https://www.instagram.com/sarakhalid.art" target="_blank" rel="noreferrer" aria-label="Instagram" className="opacity-80 hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm5 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z"/></svg>
                </a>
                <a href="https://www.facebook.com/sarakhalid.art/" target="_blank" rel="noreferrer" aria-label="Facebook" className="opacity-80 hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M13 3h4a1 1 0 1 1 0 2h-3v3h3a1 1 0 1 1 0 2h-3v11h-3V10H8V8h3V6a3 3 0 0 1 3-3z"/></svg>
                </a>
              </li>
            </ul>
          </nav>
        )}

      </div>
    </header>
  );
};
