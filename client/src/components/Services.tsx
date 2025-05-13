import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const detailedServices = [
  {
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Website design process",
    title: "Website Design",
    description:
      "Our custom web design service focuses on creating visually stunning, user-friendly websites that effectively represent your brand and engage your visitors.",
    features: [
      "Responsive, mobile-first design",
      "User experience optimization",
      "Brand-aligned visual elements",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "SEO analysis process",
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings and increase organic traffic with our comprehensive SEO strategies tailored to your business goals.",
    features: [
      "Keyword research and analysis",
      "On-page and technical SEO",
      "Performance tracking and reporting",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "E-commerce setup process",
    title: "E-Commerce Setup",
    description:
      "Launch your online store with a secure, user-friendly e-commerce solution that makes it easy for customers to browse and purchase your products.",
    features: [
      "Custom product catalogs",
      "Secure payment integration",
      "Inventory management systems",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Web development process",
    title: "Custom Development",
    description:
      "Bespoke web applications and functionalities tailored to your specific business needs and processes.",
    features: [
      "Business process automation",
      "Custom API integrations",
      "Database design and optimization",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Social media management process",
    title: "Social Media Management",
    description:
      "Build your brand presence and engage with your audience through strategic social media management and content creation.",
    features: [
      "Content strategy development",
      "Regular posting and engagement",
      "Performance analytics and reporting",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Content marketing process",
    title: "Content Marketing",
    description:
      "Attract and engage your target audience with valuable, relevant content that establishes your brand as an industry authority.",
    features: [
      "Blog content creation",
      "Email marketing campaigns",
      "Lead generation strategies",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 bg-[hsl(var(--neutral-lightest))] section-reveal"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-[hsl(var(--neutral-dark))] font-medium">
            Comprehensive digital solutions tailored to help your business
            succeed online and reach your target audience effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedServices.map((service, index) => (
            <Card
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-[hsl(var(--primary-light))]">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-[hsl(var(--neutral-dark))] mb-4 font-medium">
                  {service.description}
                </p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mt-1 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="text-primary hover:text-accent font-medium inline-flex items-center transition-colors duration-300"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
