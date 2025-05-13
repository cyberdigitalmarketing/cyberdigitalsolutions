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
          <a href="#home" className="flex items-center space-x-1">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <circle cx="18" cy="18" r="18" fill="#1E7AF8" />
              <path d="M9 10.5C9 9.67157 9.67157 9 10.5 9H25.5C26.3284 9 27 9.67157 27 10.5V25.5C27 26.3284 26.3284 27 25.5 27H10.5C9.67157 27 9 26.3284 9 25.5V10.5Z" fill="#FFFFFF" />
              <path d="M13.5 13.5C13.5 13.0858 13.8358 12.75 14.25 12.75H21.75C22.1642 12.75 22.5 13.0858 22.5 13.5V22.5C22.5 22.9142 22.1642 23.25 21.75 23.25H14.25C13.8358 23.25 13.5 22.9142 13.5 22.5V13.5Z" fill="#EF476F" />
              <path d="M18 18C19.6569 18 21 16.6569 21 15C21 13.3431 19.6569 12 18 12C16.3431 12 15 13.3431 15 15C15 16.6569 16.3431 18 18 18Z" fill="#EF476F" />
              <path d="M18 24C21.3137 24 24 21.3137 24 18C24 14.6863 21.3137 12 18 12C14.6863 12 12 14.6863 12 18C12 21.3137 14.6863 24 18 24Z" stroke="#1E7AF8" strokeWidth="1.5" />
            </svg>
            <div className="text-primary font-bold text-xl md:text-2xl">
              CyberDigital<span className="text-accent">Solutions</span>
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
