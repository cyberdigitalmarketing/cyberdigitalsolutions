import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-[hsl(var(--primary-dark))] via-primary to-[hsl(var(--primary-light))] text-white relative overflow-hidden"
    >
      <div className="absolute top-4 right-4 md:top-8 md:right-8 lg:top-12 lg:right-12 z-10 hidden md:block">
        <svg 
          width="100" 
          height="100" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 animate-pulse-scale opacity-25"
        >
          <rect width="40" height="40" rx="8" fill="#ffffff"/>
          <path d="M7 20C7 13.3726 12.3726 8 19 8H21C27.6274 8 33 13.3726 33 20V20C33 26.6274 27.6274 32 21 32H19C12.3726 32 7 26.6274 7 20V20Z" fill="#1E7AF8"/>
          <path d="M12 20C12 16.134 15.134 13 19 13H21C24.866 13 28 16.134 28 20V20C28 23.866 24.866 27 21 27H19C15.134 27 12 23.866 12 20V20Z" fill="#0597F2"/>
          <path d="M20 16V24M16 20H24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 animate-fade-in">
            Transforming Digital{" "}
            <span className="text-[hsl(var(--accent-light))]">Experiences</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white animate-slide-up font-medium">
            Custom web solutions that drive results for small and mid-sized
            businesses. Stand out in the digital landscape with our expert
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="bg-accent hover:bg-[hsl(var(--accent-dark))] text-white font-semibold px-6 py-6 h-auto"
            >
              <a href="#services">Our Services</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white hover:bg-[hsl(var(--neutral-lightest))] text-primary font-semibold px-6 py-6 h-auto"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900"
            alt="Modern workplace with digital technology"
            className="rounded-lg shadow-xl animate-fade-in w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
