import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "CyberDigitalSolutions transformed our outdated website into a modern, user-friendly platform that's significantly increased our online leads. Their team was professional, responsive, and delivered exactly what we needed.",
    author: "Sarah Johnson",
    position: "Marketing Director, Apex Consulting",
    rating: 5,
  },
  {
    quote:
      "The e-commerce solution developed by CyberDigitalSolutions has revolutionized our business. Sales have increased by 75% since launch, and the administrative dashboard makes managing our online store incredibly simple.",
    author: "Michael Chen",
    position: "Owner, GreenLeaf Boutique",
    rating: 5,
  },
  {
    quote:
      "Their SEO expertise has been invaluable for our business. We're now ranking on page 1 for our key search terms, and the increased visibility has brought a steady stream of new customers to our business.",
    author: "Jennifer Martinez",
    position: "CEO, TechCore Solutions",
    rating: 4.5,
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="fill-current" />);
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half-star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" strokeWidth="1" />
            </linearGradient>
          </defs>
          <path
            fillRule="evenodd"
            fill="url(#half)"
            stroke="currentColor"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      );
    }

    while (stars.length < 5) {
      stars.push(
        <Star key={`empty-${stars.length}`} className="text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <section className="py-16 bg-primary text-white section-reveal">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-[hsl(var(--neutral-lightest))]">
            Hear from businesses we've helped transform their digital presence.
          </p>
        </div>

        <div className="relative testimonial-slider max-w-4xl mx-auto">
          {/* Testimonial Slides */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-slide transition-opacity duration-500 ${
                index === currentSlide ? "block" : "hidden"
              }`}
            >
              <Card className="bg-white rounded-lg shadow-md">
                <CardContent className="p-6 text-[hsl(var(--neutral-darkest))]">
                  <div className="mb-4 text-accent flex">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="italic mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[hsl(var(--neutral-light))] rounded-full mr-4"></div>
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-[hsl(var(--neutral-dark))]">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 gap-2">
            <Button
              onClick={prevSlide}
              size="icon"
              variant="outline"
              className="bg-white text-primary hover:bg-[hsl(var(--neutral-lightest))] rounded-full p-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={nextSlide}
              size="icon"
              variant="outline"
              className="bg-white text-primary hover:bg-[hsl(var(--neutral-lightest))] rounded-full p-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
