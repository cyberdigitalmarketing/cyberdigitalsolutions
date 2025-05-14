import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleScroll = useCallback(() => {
    // Dynamically change logo size and navbar appearance based on scroll position
    const scrollPosition = window.scrollY;
    const maxScroll = 200; // Maximum scroll threshold for style changes
    
    if (scrollPosition > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${
        scrolled ? "py-2 shadow-lg" : "py-3 shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 240 64" 
              className={`h-10 sm:h-12 md:h-14 transition-all duration-300 ${scrolled ? "" : "animate-pulse-scale"}`}
            >
              {/* Logo Symbol */}
              <g transform="translate(0,0)">
                {/* Abstract circuit board background */}
                <rect width="64" height="64" rx="8" fill="#2a1570" />
                
                {/* Digital circuit lines */}
                <path d="M10 20 H30 V40 H50" stroke="#ff3371" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M15 50 H40 V30 H54" stroke="#ff3371" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M35 15 V35 H55" stroke="#ff3371" strokeWidth="2" fill="none" strokeLinecap="round" />
                
                {/* Connection points/nodes */}
                <circle cx="30" cy="20" r="3" fill="#ff3371" />
                <circle cx="30" cy="40" r="3" fill="#ff3371" />
                <circle cx="50" cy="40" r="3" fill="#ff3371" />
                <circle cx="15" cy="50" r="3" fill="#ff3371" />
                <circle cx="40" cy="50" r="3" fill="#ff3371" />
                <circle cx="40" cy="30" r="3" fill="#ff3371" />
                <circle cx="54" cy="30" r="3" fill="#ff3371" />
                <circle cx="35" cy="15" r="3" fill="#ff3371" />
                <circle cx="35" cy="35" r="3" fill="#ff3371" />
                <circle cx="55" cy="35" r="3" fill="#ff3371" />
                
                {/* 'C' letter shape overlay */}
                <path 
                  d="M32 12c-11.05 0-20 8.95-20 20s8.95 20 20 20c8.84 0 16.34-5.73 19-13.7" 
                  stroke="#ffffff" 
                  strokeWidth="5" 
                  fill="none" 
                  strokeLinecap="round"
                />
              </g>
              
              {/* Logo Text - Only show on larger screens */}
              <g className="hidden sm:block" transform="translate(78, 28)">
                {/* Cyber Digital */}
                <text 
                  fontFamily="Arial, sans-serif" 
                  fontSize="20" 
                  fontWeight="700" 
                  letterSpacing="-0.5px"
                  fill="#1E7AF8"
                >
                  Cyber <tspan fill="#0597F2">Digital</tspan>
                </text>
                
                {/* Solutions */}
                <text 
                  fontFamily="Arial, sans-serif" 
                  fontSize="12" 
                  fontWeight="500"
                  fill="#343a40"
                  y="16"
                >
                  Solutions
                </text>
              </g>
            </svg>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-neutral-darkest focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-neutral-darkest hover:text-primary font-medium py-2 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-neutral-darkest hover:text-primary font-medium py-2 transition-colors duration-300"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-neutral-darkest hover:text-primary font-medium py-2 transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-neutral-darkest hover:text-primary font-medium py-2 transition-colors duration-300"
            >
              Portfolio
            </a>
            <a href="#contact">
              <Button className="bg-primary text-white hover:bg-[hsl(var(--primary-dark))]">
                Contact Us
              </Button>
            </a>
          </nav>
        </div>

        {/* Mobile navigation */}
        <nav
          className={`${
            mobileMenuOpen ? "flex" : "hidden"
          } flex-col mt-4 pb-4 md:hidden gap-4`}
        >
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="text-neutral-darkest hover:text-primary font-medium py-2 border-b border-neutral"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={closeMobileMenu}
            className="text-neutral-darkest hover:text-primary font-medium py-2 border-b border-neutral"
          >
            About Us
          </a>
          <a
            href="#services"
            onClick={closeMobileMenu}
            className="text-neutral-darkest hover:text-primary font-medium py-2 border-b border-neutral"
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={closeMobileMenu}
            className="text-neutral-darkest hover:text-primary font-medium py-2 border-b border-neutral"
          >
            Portfolio
          </a>
          <a href="#contact" onClick={closeMobileMenu}>
            <Button className="bg-primary w-full text-white hover:bg-[hsl(var(--primary-dark))]">
              Contact Us
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
