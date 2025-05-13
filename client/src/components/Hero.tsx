import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-[hsl(var(--primary-dark))] via-primary to-[hsl(var(--primary-light))] text-white relative overflow-hidden"
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
        <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
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
          
          <div className="mt-4 flex items-center bg-white/20 backdrop-blur-sm p-4 rounded-lg max-w-md animate-float">
            <div className="flex -space-x-3 mr-4">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" 
                alt="Customer" 
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" 
                alt="Customer" 
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img 
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" 
                alt="Customer" 
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <div>
              <div className="flex text-yellow-300 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm font-medium">Trusted by 200+ businesses</p>
            </div>
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
