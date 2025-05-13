import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "../assets/crisp-logo.svg";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Function to adjust navbar background opacity based on scroll position
  const getNavbarStyle = () => {
    if (scrolled) {
      return { backgroundColor: 'rgba(255, 255, 255, 1)', backdropFilter: 'blur(10px)' };
    }
    return { backgroundColor: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(8px)' };
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
      style={getNavbarStyle()}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 shadow-lg" : "py-3 shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-1">
            <img 
              src={logo} 
              alt="Cyber Digital Solutions Logo" 
              className={`h-12 sm:h-14 md:h-16 transition-all duration-300 ${scrolled ? "scale-95" : "scale-100"}`}
            />
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
