const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[80vh] flex items-center border-b border-black">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">BOLD<br/>DESIGN.<br/>CLEAN CODE.</h1>
            <p className="text-xl mb-8 max-w-md">Crafting minimalist digital experiences with Swiss precision and modern technology.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-3 bg-black text-white font-bold hover:bg-gray-800 transition-colors">VIEW WORK</a>
              <a href="#contact" className="px-8 py-3 border-2 border-black font-bold hover:bg-gray-100 transition-colors">GET IN TOUCH</a>
            </div>
          </div>
          <div className="order-1 md:order-2 bg-accent aspect-square md:aspect-auto md:h-[450px] flex items-center justify-center">
            <div className="border-8 border-black h-4/5 w-4/5 flex items-center justify-center bg-white">
              <p className="font-bold text-xl text-center">PORTRAIT<br/>IMAGE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
