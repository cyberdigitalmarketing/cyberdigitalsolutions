import { Link } from "wouter";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";
import logo from "../assets/logo-high-quality.svg";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--primary-dark))] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logo} 
                alt="Cyber Digital Solutions Logo" 
                className="h-14 mr-2 -ml-2"
              />
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
