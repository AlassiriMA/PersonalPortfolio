const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold">ABOUT</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-6">
              Hi, I'm <strong>Mohammad A. Alassiri</strong> — a passionate full-stack developer and operations strategist blending technology with business insight. I specialize in building scalable apps, managing high-performance tech teams, and delivering powerful digital tools from idea to deployment.
            </p>
            <p className="text-lg mb-6">
              I've worked across diverse roles from operations management in large-scale events to hands-on software development with modern web stacks. Whether it's a POS system for a bookstore or an AI-powered assistant for freelancers, I bring clarity, structure, and smart execution to every project.
            </p>
            <p className="text-lg mb-8">
              I'm currently focusing on cloud-native deployments, developer tooling, and launching automated digital businesses.
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
              <p className="font-bold text-center">SKILLS</p>
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
