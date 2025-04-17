const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold">ABOUT</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-6">
              I'm a design-focused developer with a passion for minimalist aesthetics and clean functionality. Inspired by Swiss design principles, I create digital experiences that combine bold typography with thoughtful interaction.
            </p>
            <p className="text-lg mb-6">
              My approach emphasizes clarity, precision, and user-focused solutions. I believe that great design should communicate effectively while remaining visually striking.
            </p>
            <p className="text-lg mb-8">
              When I'm not coding or designing, you'll find me exploring new technologies, studying design history, or searching for the perfect typeface.
            </p>
            <a href="#" className="px-8 py-3 bg-black text-white font-bold inline-block hover:bg-gray-800 transition-colors">DOWNLOAD CV</a>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="bg-accent aspect-square flex items-center justify-center p-4">
              <p className="font-bold text-center">EDUCATION</p>
            </div>
            <div className="bg-accent aspect-square flex items-center justify-center p-4">
              <p className="font-bold text-center">EXPERIENCE</p>
            </div>
            <div className="bg-accent aspect-square flex items-center justify-center p-4">
              <p className="font-bold text-center">AWARDS</p>
            </div>
            <div className="bg-accent aspect-square flex items-center justify-center p-4">
              <p className="font-bold text-center">INTERESTS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
