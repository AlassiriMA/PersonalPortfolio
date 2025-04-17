const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold">ABOUT</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-6">
              Hi, I'm <strong>Mohammad A. Alassiri</strong> — a versatile and innovative Full-Stack Developer with a proven track record of building high-performance web applications. I specialize in modern tech stacks like React, TypeScript, Node.js, Express, and PostgreSQL.
            </p>
            <p className="text-lg mb-6">
              As an Operations Manager at Lenador Systems, I've led technical support teams for large-scale events while developing my expertise in software engineering. I blend technical depth with clean architecture and have created 10+ live demo applications spanning real-world use cases.
            </p>
            <p className="text-lg mb-8">
              Currently exploring cloud automation, AI integration, and DeFi trading technologies to build intelligent, scalable systems.
            </p>
            <a 
              href="/assets/alassiri_cv_apr_25.pdf" 
              download="Mohammad_Alassiri_CV.pdf" 
              className="px-8 py-3 bg-black text-white font-bold inline-flex items-center gap-2 hover:bg-gray-800 transition-all transform hover:-translate-y-1 duration-300 shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              DOWNLOAD CV
            </a>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="bg-accent aspect-square flex flex-col items-center justify-center p-4">
              <p className="font-bold text-center mb-2">EDUCATION</p>
              <ul className="text-sm text-center">
                <li>Knowledge Engineering</li>
                <li>Maastricht University</li>
                <li>Business Administration</li>
                <li>Tourism Management</li>
              </ul>
            </div>
            <div className="bg-accent aspect-square flex flex-col items-center justify-center p-4">
              <p className="font-bold text-center mb-2">EXPERIENCE</p>
              <ul className="text-sm text-center">
                <li>Operations Manager</li>
                <li>Full-Stack Developer</li>
                <li>5+ Years Professional</li>
                <li>10+ Demo Applications</li>
              </ul>
            </div>
            <div className="bg-accent aspect-square flex flex-col items-center justify-center p-4">
              <p className="font-bold text-center mb-2">LANGUAGES</p>
              <ul className="text-sm text-center">
                <li>English — Fluent</li>
                <li>Arabic — Native</li>
                <li>Dutch — Conversational</li>
              </ul>
            </div>
            <div className="bg-accent aspect-square flex flex-col items-center justify-center p-4">
              <p className="font-bold text-center mb-2">INTERESTS</p>
              <ul className="text-sm text-center">
                <li>AI Agents</li>
                <li>Cloud Automation</li>
                <li>DeFi Trading Bots</li>
                <li>Business & Startups</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
