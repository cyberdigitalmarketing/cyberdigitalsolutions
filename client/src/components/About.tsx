import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Creative Design",
  "Responsive Development",
  "Performance Optimization",
  "Ongoing Support",
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-white section-reveal">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900"
              alt="Team of professionals collaborating"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              About Cyber Digital Solutions
            </h2>
            <p className="text-[hsl(var(--neutral-dark))] mb-4">
              Founded in 2015, Cyber Digital Solutions has been partnering with
              businesses to create impactful digital experiences that drive real
              results. Our team of experts brings together creativity and
              technical expertise to deliver solutions that stand out.
            </p>
            <p className="text-[hsl(var(--neutral-dark))] mb-6">
              We believe in building long-term relationships with our clients,
              understanding their unique challenges, and developing custom
              strategies that align with their business goals.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-accent mr-2">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-primary hover:bg-[hsl(var(--primary-dark))] text-white font-semibold"
              >
                <a href="#services">Our Services</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white font-semibold"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
