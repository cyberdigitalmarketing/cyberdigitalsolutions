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
    if (window.scrollY > 50) {
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
          <a href="#home" className="flex items-center space-x-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M20 5L5 12.5V27.5L20 35L35 27.5V12.5L20 5Z" fill="#6530CC" />
              <path d="M20 15L12.5 19V27L20 31L27.5 27V19L20 15Z" fill="#15CDB3" />
              <path d="M20 5V15M5 12.5L12.5 19M35 12.5L27.5 19M20 35V31M5 27.5L12.5 27M35 27.5L27.5 27" stroke="#4A1098" strokeWidth="1.5" />
            </svg>
            <div className="text-primary font-bold text-2xl">
              Cyber<span className="text-accent">Digital</span>
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
