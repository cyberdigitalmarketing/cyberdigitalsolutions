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
          <a href="#home" className="flex items-center space-x-1">
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mr-1 md:mr-2 transition-all duration-300 ${scrolled ? "" : "animate-pulse-scale"}`}
            >
              <rect width="40" height="40" rx="4" fill="#1E7AF8"/>
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M10 10C10 8.89543 10.8954 8 12 8H28C29.1046 8 30 8.89543 30 10V30C30 31.1046 29.1046 32 28 32H12C10.8954 32 10 31.1046 10 30V10ZM12 10H28V30H12V10Z" 
                fill="white"
              />
              <path d="M17 15H15V25H17V15Z" fill="white"/>
              <path d="M21 15H19V25H21V15Z" fill="white"/>
              <path d="M25 15H23V25H25V15Z" fill="white"/>
              <path d="M17 20H25V22H17V20Z" fill="#0597F2"/>
            </svg>
            <div className="text-primary font-bold text-sm sm:text-base md:text-xl lg:text-2xl transition-all duration-300">
              <span>Cyber Digital </span>
              <span className="text-accent">Solutions</span>
            </div>
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
