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
            <div className="flex items-center mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 240 64" 
                className="h-12"
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
                
                {/* Logo Text */}
                <g transform="translate(78, 28)">
                  {/* Cyber Digital */}
                  <text 
                    fontFamily="Arial, sans-serif" 
                    fontSize="20" 
                    fontWeight="700" 
                    letterSpacing="-0.5px"
                    fill="#ffffff"
                  >
                    Cyber <tspan fill="#ff3371">Digital</tspan>
                  </text>
                  
                  {/* Solutions */}
                  <text 
                    fontFamily="Arial, sans-serif" 
                    fontSize="12" 
                    fontWeight="500"
                    fill="#cccccc"
                    y="16"
                  >
                    Solutions
                  </text>
                </g>
              </svg>
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
