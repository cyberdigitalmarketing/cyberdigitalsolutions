import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type PortfolioCategory = "all" | "web-design" | "e-commerce" | "seo";

interface PortfolioItem {
  category: Exclude<PortfolioCategory, "all">;
  image: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    category: "web-design",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "Modern business website design",
    title: "Apex Consulting Redesign",
    description:
      "Complete website redesign for a consulting firm with improved user experience and modern aesthetics.",
    tags: ["Web Design", "UI/UX"],
  },
  {
    category: "e-commerce",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "E-commerce website design",
    title: "GreenLeaf Boutique Store",
    description:
      "E-commerce platform development for an eco-friendly clothing brand with secure payment processing.",
    tags: ["E-Commerce", "Shopify"],
  },
  {
    category: "seo",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "SEO improvement analytics",
    title: "TechCore SEO Campaign",
    description:
      "Comprehensive SEO strategy that increased organic traffic by 156% in just six months.",
    tags: ["SEO", "Analytics"],
  },
  {
    category: "web-design",
    image:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "Restaurant website design",
    title: "Savory Bites Restaurant",
    description:
      "Responsive website with online reservation system and interactive menu for a local restaurant.",
    tags: ["Web Design", "WordPress"],
  },
  {
    category: "e-commerce",
    image:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "Electronics e-commerce website",
    title: "NextGen Electronics",
    description:
      "High-performance e-commerce platform with advanced filtering and product comparison features.",
    tags: ["E-Commerce", "WooCommerce"],
  },
  {
    category: "seo",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "Content marketing strategy",
    title: "HealthHub Blog Strategy",
    description:
      "Content marketing and SEO campaign that established the client as an industry thought leader.",
    tags: ["SEO", "Content"],
  },
];

const filterButtons: { label: string; value: PortfolioCategory }[] = [
  { label: "All Projects", value: "all" },
  { label: "Web Design", value: "web-design" },
  { label: "E-Commerce", value: "e-commerce" },
  { label: "SEO", value: "seo" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("all");

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 bg-white section-reveal">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-[hsl(var(--neutral-dark))]">
            Explore our recent projects and see how we've helped businesses
            achieve their digital goals.
          </p>
        </div>

        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filterButtons.map((button) => (
            <Button
              key={button.value}
              onClick={() => setActiveFilter(button.value)}
              variant={activeFilter === button.value ? "default" : "outline"}
              className={
                activeFilter === button.value
                  ? "bg-primary text-white"
                  : "bg-[hsl(var(--neutral-light))] text-[hsl(var(--neutral-darkest))]"
              }
            >
              {button.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              <Card className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-[hsl(var(--neutral-dark))] text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs bg-[hsl(var(--neutral-light))] px-2 py-1 rounded-full"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
