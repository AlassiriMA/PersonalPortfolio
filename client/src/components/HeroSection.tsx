const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center border-b-4 border-black bg-gradient-to-br from-white via-blue-50 to-accent">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-bl-full opacity-80 z-0"></div>
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 mb-6 font-bold shadow-lg transform hover:scale-105 transition-all duration-300">FULL STACK DEVELOPER</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Crafting Smart<br/>
              <span className="relative">
                Digital Solutions
                <span className="absolute -bottom-3 left-0 w-1/3 h-2 bg-gradient-to-r from-red-500 to-orange-500"></span>
              </span><br/>
              <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">with Code & Precision</span>
            </h1>
            <p className="text-xl mb-10 max-w-md">Full-stack developer building powerful, high-performance web applications and automated systems.</p>
            <div className="flex flex-wrap gap-6">
              <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 duration-300 shadow-lg">VIEW WORK</a>
              <a href="#contact" className="px-8 py-4 border-2 border-black font-bold hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 duration-300 shadow-lg">GET IN TOUCH</a>
            </div>
          </div>
          <div className="order-1 md:order-2 bg-white aspect-square md:h-[500px] flex items-center justify-center relative shadow-2xl transform md:rotate-2 border-4 border-black overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 opacity-30 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-yellow-500 to-red-500 opacity-30 rounded-full translate-x-20 translate-y-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/20 z-10"></div>
            <div className="absolute top-4 left-4 right-4 bottom-4 border-4 border-black border-dashed flex items-center justify-center z-20">
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <div className="font-mono text-2xl font-bold border-b-2 border-black pb-2 relative">
                  FULL STACK DEVELOPER
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="border-2 border-black p-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold shadow-md transition-transform duration-300 hover:scale-105">REACT</div>
                  <div className="border-2 border-black p-2 bg-gradient-to-br from-green-500 to-green-600 text-white font-bold shadow-md transition-transform duration-300 hover:scale-105">NODE.JS</div>
                  <div className="border-2 border-black p-2 bg-gradient-to-br from-purple-500 to-purple-600 text-white font-bold shadow-md transition-transform duration-300 hover:scale-105">UI/UX</div>
                  <div className="border-2 border-black p-2 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white font-bold shadow-md transition-transform duration-300 hover:scale-105">CLOUD</div>
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
