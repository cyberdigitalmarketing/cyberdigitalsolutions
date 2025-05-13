import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Search, ShoppingCart } from "lucide-react";

const serviceItems = [
  {
    icon: <Laptop className="h-8 w-8" />,
    title: "Website Design",
    description:
      "Custom, responsive websites built to impress your visitors and turn them into customers.",
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "SEO Optimization",
    description:
      "Get found online with search engine optimization strategies that drive targeted traffic.",
  },
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: "E-Commerce Setup",
    description:
      "Sell products online with a secure, user-friendly e-commerce solution.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-[hsl(var(--neutral-lightest))] section-reveal">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">How We Can Help You</h2>
          <p className="text-[hsl(var(--neutral-dark))]">
            We provide comprehensive digital solutions tailored to your business
            needs, helping you establish a strong online presence and drive
            growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card
              key={index}
              className="bg-white p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0 flex flex-col items-center">
                <div className="text-accent text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-[hsl(var(--neutral-dark))]">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Button
            asChild
            className="bg-primary hover:bg-[hsl(var(--primary-dark))] text-white font-semibold"
          >
            <a href="#services">View All Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
