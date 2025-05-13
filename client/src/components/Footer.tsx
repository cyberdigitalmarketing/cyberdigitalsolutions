import { Link } from "wouter";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--primary-dark))] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-6 h-6 mr-1"
              >
                <rect width="40" height="40" rx="8" fill="#1E7AF8"/>
                <path d="M7 20C7 13.3726 12.3726 8 19 8H21C27.6274 8 33 13.3726 33 20V20C33 26.6274 27.6274 32 21 32H19C12.3726 32 7 26.6274 7 20V20Z" fill="white"/>
                <path d="M12 20C12 16.134 15.134 13 19 13H21C24.866 13 28 16.134 28 20V20C28 23.866 24.866 27 21 27H19C15.134 27 12 23.866 12 20V20Z" fill="#0597F2"/>
                <path d="M20 16V24M16 20H24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h3 className="text-xl font-semibold">
                Cyber Digital Solutions
              </h3>
            </div>
            <p className="text-[hsl(var(--neutral-light))] mb-6">
              Creating digital experiences that drive results for businesses of
              all sizes.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-accent text-lg transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent text-lg transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent text-lg transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent text-lg transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-[hsl(var(--neutral-light))] hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[hsl(var(--neutral-light))] hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[hsl(var(--neutral-light))] hover:text-white transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-[hsl(var(--neutral-light))] hover:text-white transition-colors duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[hsl(var(--neutral-light))] hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-[hsl(var(--neutral-light))] hover:text-white transition-colors duration-300"
                >
                  Website Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[hsl(var(--neutral-light))] hover:text-white transition-colors duration-300"
                >
                  SEO Optimization
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[hsl(var(--neutral-light))] hover:text-white transition-colors duration-300"
                >
                  E-Commerce Setup
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[hsl(var(--neutral-light))] hover:text-white transition-colors duration-300"
                >
                  Custom Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[hsl(var(--neutral-light))] hover:text-white transition-colors duration-300"
                >
                  Social Media Management
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">

              <li className="flex items-start">
                <Mail className="h-5 w-5 mt-1 mr-2" />
                <span className="text-[hsl(var(--neutral-light))]">
                  cyberdigitalsolutions@mail.com
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mt-1 mr-2" />
                <span className="text-[hsl(var(--neutral-light))]">
                  (519) 774-3499
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[hsl(var(--neutral-light))]">
            © {currentYear} Cyber Digital Solutions. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-[hsl(var(--neutral-light))] hover:text-white mr-4 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[hsl(var(--neutral-light))] hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
