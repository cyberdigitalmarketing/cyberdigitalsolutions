import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="py-16 bg-accent text-white section-reveal">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Let's discuss how we can help your business stand out online and
          achieve your goals.
        </p>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="bg-white text-accent hover:bg-[hsl(var(--neutral-lightest))] font-semibold px-8 py-4 h-auto text-lg"
        >
          <a href="#contact">Get Started Today</a>
        </Button>
      </div>
    </section>
  );
}
