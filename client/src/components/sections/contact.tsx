import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { slideUp } from "@/lib/animations";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactMessage } from "@shared/types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactMessage>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactMessage) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent_70%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Get In" highlight="Touch" />
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            <div className="bg-surface border border-gray-700 rounded-xl p-6 shadow-lg h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="bg-background/50 rounded-lg p-4 flex items-start gap-4">
                  <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-user text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Name</h4>
                    <p className="text-gray-400">Md. Tareq Ahamed Jony</p>
                  </div>
                </div>
                
                <div className="bg-background/50 rounded-lg p-4 flex items-start gap-4">
                  <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Email</h4>
                    <p className="text-gray-400">hello@0xt4req.com</p>
                  </div>
                </div>
                
                <div className="bg-background/50 rounded-lg p-4 flex items-start gap-4">
                  <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-phone text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Phone</h4>
                    <p className="text-gray-400">+8801521784179</p>
                  </div>
                </div>
                
                <div className="bg-background/50 rounded-lg p-4 flex items-start gap-4">
                  <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-location-dot text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Location</h4>
                    <p className="text-gray-400">Dinajpur, Bangladesh</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium text-gray-200 mb-3">Social Media</h4>
                  <div className="flex gap-3">
                    <a href="https://github.com/0xt4req" target="_blank" rel="noopener noreferrer" 
                      className="bg-background hover:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                      <i className="fa-brands fa-github text-gray-300"></i>
                    </a>
                    <a href="https://linkedin.com/in/0xt4req" target="_blank" rel="noopener noreferrer" 
                      className="bg-background hover:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                      <i className="fa-brands fa-linkedin text-gray-300"></i>
                    </a>
                    <a href="https://twitter.com/0xt4req" target="_blank" rel="noopener noreferrer" 
                      className="bg-background hover:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                      <i className="fa-brands fa-twitter text-gray-300"></i>
                    </a>
                    <a href="https://hackerone.com/0xt4req" target="_blank" rel="noopener noreferrer" 
                      className="bg-background hover:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                      <i className="fa-solid fa-bug text-gray-300"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
          >
            <div className="bg-surface border border-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            className="bg-background border-gray-700 focus:border-primary text-gray-200"
                            {...field}
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
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="johndoe@example.com" 
                            type="email"
                            className="bg-background border-gray-700 focus:border-primary text-gray-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Subject" 
                            className="bg-background border-gray-700 focus:border-primary text-gray-200"
                            {...field}
                          />
                        </FormControl>
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
                            placeholder="Your message here..." 
                            className="bg-background border-gray-700 focus:border-primary text-gray-200"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium shadow-lg shadow-primary/30"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <span>Send Message</span>
                        <i className="fa-solid fa-paper-plane"></i>
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
