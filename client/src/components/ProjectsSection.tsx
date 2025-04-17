import { ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageAlt: string;
  link: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "📚 TermPOS",
      description: "A terminal-based point-of-sale system for bookshops. Includes inventory, customer management, sales reports, and invoice printing.",
      tags: ["Node.js", "SQLite", "CLI"],
      imageAlt: "TermPOS Project",
      link: "https://termpos.alassiri.nl"
    },
    {
      title: "🍏 Green Market",
      description: "A sleek e-commerce platform for selling fruits and vegetables. Responsive design, product filtering, shopping cart, and checkout flow.",
      tags: ["React", "Express", "PostgreSQL"],
      imageAlt: "Green Market E-Commerce App",
      link: "https://greens.alassiri.nl"
    },
    {
      title: "📈 Social Media Manager",
      description: "An automation tool that helps businesses manage, schedule, and generate content for multiple social media platforms using AI prompts.",
      tags: ["Node.js", "React", "OpenAI"],
      imageAlt: "Social Media Manager SaaS",
      link: "https://social.alassiri.nl"
    },
    {
      title: "🤖 DeFi Trading Bot",
      description: "A crypto bot that identifies cointegrated trading pairs and executes arbitrage strategies. Real-time alerts via Telegram.",
      tags: ["Python", "Docker", "APIs"],
      imageAlt: "DeFi Trading Bot",
      link: "https://defi.alassiri.nl"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-white to-accent/10 border-y-4 border-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between mb-12">
          <h2 className="section-title text-4xl md:text-5xl font-bold relative inline-block">
            PROJECTS
            <span className="absolute -bottom-3 left-0 w-1/3 h-2 bg-black"></span>
          </h2>
          <p className="md:max-w-md text-lg mt-6 md:mt-0">
            A selection of my recent work and demo applications. Each project showcases different skills and technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white border-4 border-black overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video bg-black flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/50 opacity-80 z-10"></div>
                <div className="z-20 p-6 text-black">
                  <div className="font-mono text-xs mb-2 bg-white px-2 py-1 rounded-sm inline-block border-2 border-black">FEATURED PROJECT</div>
                  <h3 className="text-4xl font-bold mb-2 text-white">{project.title.replace(/^[📚🍏📈🤖]\s/, '')}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="mb-6 text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-black text-white font-bold text-sm">{tag}</span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold inline-flex items-center px-6 py-3 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors"
                >
                  VIEW PROJECT
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://alassiri.nl" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center bg-black text-white font-bold px-8 py-4 text-lg hover:bg-gray-800 transition-colors"
          >
            VIEW ALL PROJECTS
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
