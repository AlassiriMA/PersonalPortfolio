import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mldjydvd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-white to-accent border-t-4 border-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-10 relative inline-block">
          GET IN TOUCH
          <span className="absolute -bottom-3 left-0 w-1/3 h-2 bg-black"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 border-4 border-black shadow-lg">
            <p className="text-lg mb-8 font-medium">
              Interested in working together? Fill out the form with some info about your project, and I'll get back to you as soon as possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-black pl-4">
                <h3 className="font-bold text-xl mb-2">EMAIL</h3>
                <a href="mailto:me@alassiri.nl" className="hover:underline transition-colors hover:text-blue-600">me@alassiri.nl</a>
              </div>
              <div className="border-l-4 border-black pl-4">
                <h3 className="font-bold text-xl mb-2">PHONE</h3>
                <a href="tel:+31610979730" className="hover:underline transition-colors hover:text-blue-600">+316 1097 9730</a>
              </div>
              <div className="border-l-4 border-black pl-4">
                <h3 className="font-bold text-xl mb-2">WEBSITE</h3>
                <a href="https://alassiri.nl" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors hover:text-blue-600">alassiri.nl</a>
              </div>
              <div className="border-l-4 border-black pl-4">
                <h3 className="font-bold text-xl mb-2">SOCIAL</h3>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/mak-alassiri" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline transition-colors hover:text-blue-600">LINKEDIN</a>
                  <a href="https://github.com/AlassiriMA" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline transition-colors hover:text-blue-600">GITHUB</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 border-4 border-black shadow-lg">
            <h3 className="font-bold text-2xl mb-6 pb-2 border-b-2 border-black">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block font-bold mb-2">NAME</label>
                <Input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-2 border-black p-3 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" 
                  placeholder="Your name" 
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-bold mb-2">EMAIL</label>
                <Input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-black p-3 bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300" 
                  placeholder="Your email" 
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-bold mb-2">MESSAGE</label>
                <Textarea 
                  id="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-2 border-black p-3 bg-white resize-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300" 
                  placeholder="Tell me about your project" 
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="px-8 py-4 bg-black text-white font-bold hover:bg-gray-800 transition-all transform hover:-translate-y-1 duration-300 w-full md:w-auto shadow-[0_4px_14px_0_rgba(0,118,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    SENDING...
                  </>
                ) : 'SEND MESSAGE'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
