import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Mail, Phone, Check } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Here we would normally submit to Formspree
      // For example: await fetch(`https://formspree.io/f/your-form-id`, {...})
      
      // Simulating a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 bg-[hsl(var(--neutral-lightest))] section-reveal"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-[hsl(var(--neutral-dark))]">
            Have a project in mind? Get in touch with us to discuss how we can
            help your business grow online.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <Card className="bg-white p-6 rounded-lg shadow-md">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl text-accent mb-4 flex justify-center">
                    <Check className="h-16 w-16" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="mb-6">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      form.reset();
                    }}
                    className="bg-primary hover:bg-[hsl(var(--primary-dark))] text-white font-semibold"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your email"
                              type="email"
                              {...field}
                              className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your phone number"
                              type="tel"
                              {...field}
                              className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interested In</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                                <SelectValue placeholder="Select a Service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="website-design">
                                Website Design
                              </SelectItem>
                              <SelectItem value="seo">
                                SEO Optimization
                              </SelectItem>
                              <SelectItem value="e-commerce">
                                E-Commerce Setup
                              </SelectItem>
                              <SelectItem value="custom-development">
                                Custom Development
                              </SelectItem>
                              <SelectItem value="social-media">
                                Social Media Management
                              </SelectItem>
                              <SelectItem value="content-marketing">
                                Content Marketing
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              {...field}
                              className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              rows={5}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-[hsl(var(--primary-dark))] text-white font-semibold rounded-md px-6 py-3 transition-colors duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </Form>
              )}
            </Card>
          </div>

          <div className="md:w-1/2">
            <Card className="bg-white p-6 rounded-lg shadow-md h-full">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-primary text-xl mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium">Our Location</h4>
                      <p className="text-[hsl(var(--neutral-dark))]">
                        123 Tech Boulevard, Suite 456
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-primary text-xl mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email Us</h4>
                      <p className="text-[hsl(var(--neutral-dark))]">
                        info@cyberdigitalsolutions.com
                        <br />
                        support@cyberdigitalsolutions.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-primary text-xl mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium">Call Us</h4>
                      <p className="text-[hsl(var(--neutral-dark))]">
                        (555) 123-4567
                        <br />
                        Mon-Fri, 9am-5pm PST
                      </p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h4 className="font-medium mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="text-primary hover:text-accent text-xl transition-colors duration-300"
                        aria-label="Facebook"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href="#"
                        className="text-primary hover:text-accent text-xl transition-colors duration-300"
                        aria-label="Twitter"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href="#"
                        className="text-primary hover:text-accent text-xl transition-colors duration-300"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href="#"
                        className="text-primary hover:text-accent text-xl transition-colors duration-300"
                        aria-label="Instagram"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
