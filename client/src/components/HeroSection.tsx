const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center border-b-4 border-black bg-gradient-to-br from-white to-accent">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block bg-black text-white px-3 py-1 mb-4 font-bold">MOHAMMAD A. ALASSIRI</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Crafting Smart<br/>
              <span className="relative">
                Digital Solutions
                <span className="absolute -bottom-3 left-0 w-1/3 h-2 bg-black"></span>
              </span><br/>
              with Code & Precision
            </h1>
            <p className="text-xl mb-10 max-w-md">Full-stack developer building powerful, high-performance web applications and automated systems.</p>
            <div className="flex flex-wrap gap-6">
              <a href="#projects" className="px-8 py-4 bg-black text-white font-bold hover:bg-gray-800 transition-colors transform hover:-translate-y-1 duration-200">VIEW WORK</a>
              <a href="#contact" className="px-8 py-4 border-2 border-black font-bold hover:bg-black hover:text-white transition-colors transform hover:-translate-y-1 duration-200">GET IN TOUCH</a>
            </div>
          </div>
          <div className="order-1 md:order-2 bg-white aspect-square md:h-[500px] flex items-center justify-center relative shadow-2xl transform md:rotate-2 border-4 border-black">
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/20 z-10"></div>
            <div className="absolute top-4 left-4 right-4 bottom-4 border-4 border-black border-dashed flex items-center justify-center z-20">
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <div className="font-mono text-2xl font-bold border-b-2 border-black pb-2">FULL STACK DEVELOPER</div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="border-2 border-black p-2 bg-accent font-bold">REACT</div>
                  <div className="border-2 border-black p-2 bg-accent font-bold">NODE.JS</div>
                  <div className="border-2 border-black p-2 bg-accent font-bold">UI/UX</div>
                  <div className="border-2 border-black p-2 bg-accent font-bold">CLOUD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
