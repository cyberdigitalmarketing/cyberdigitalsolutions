import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-[hsl(var(--primary-dark))] via-primary to-[hsl(var(--primary-light))] text-white"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 animate-fade-in">
            Transforming Digital{" "}
            <span className="text-[hsl(var(--accent-light))]">Experiences</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-[hsl(var(--neutral-lightest))] animate-slide-up">
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
