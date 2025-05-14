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
                className="w-6 h-6 mr-2"
              >
                <path d="M20 5L35 13V27L20 35L5 27V13L20 5Z" fill="#1E7AF8"/>
                <path d="M20 11L28 15.5V24.5L20 29L12 24.5V15.5L20 11Z" fill="#0D57C2"/>
                <path d="M20 16L23 17.75V21.25L20 23L17 21.25V17.75L20 16Z" fill="#0597F2"/>
                <path d="M35 13L20 20L5 13L20 5L35 13Z" fill="#0597F2" fillOpacity="0.6"/>
                <path d="M20 35L20 20L35 13L35 27L20 35Z" fill="#0D57C2" fillOpacity="0.6"/>
                <path d="M5 27L20 35L20 20L5 13L5 27Z" fill="#0D57C2" fillOpacity="0.8"/>
              </svg>
              <h3 className="text-xl font-semibold">
                Cyber Digital Solutions
              </h3>
            </div>
            <p className="text-white opacity-80 mb-6 font-medium">
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
          <p className="text-white opacity-80 font-medium">
            © {currentYear} Cyber Digital Solutions. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-white opacity-70 hover:text-white hover:opacity-100 mr-4 transition-colors duration-300"
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
