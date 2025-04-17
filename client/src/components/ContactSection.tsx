import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-accent border-t border-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold">GET IN TOUCH</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-8">
              Interested in working together? Fill out the form with some info about your project, and I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-bold text-xl mb-2">EMAIL</h3>
                <a href="mailto:hello@alassiri.com" className="hover:underline">hello@alassiri.com</a>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">LOCATION</h3>
                <p>Zurich, Switzerland</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">SOCIAL</h3>
                <div className="flex gap-4">
                  <a href="#" className="hover:underline font-bold">LINKEDIN</a>
                  <a href="#" className="hover:underline font-bold">GITHUB</a>
                  <a href="#" className="hover:underline font-bold">TWITTER</a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block font-bold mb-2">NAME</label>
                <Input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-2 border-black p-3 bg-white" 
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-bold mb-2">EMAIL</label>
                <Input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-black p-3 bg-white" 
                  placeholder="Your email" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-bold mb-2">MESSAGE</label>
                <Textarea 
                  id="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-2 border-black p-3 bg-white resize-none" 
                  placeholder="Tell me about your project" 
                />
              </div>
              <Button 
                type="submit" 
                className="px-8 py-3 bg-black text-white font-bold hover:bg-gray-800 transition-colors">
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
