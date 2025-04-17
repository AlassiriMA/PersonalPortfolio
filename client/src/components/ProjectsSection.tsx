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
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={`/assets/project${index + 1}.svg`} 
                  alt={project.imageAlt} 
                  className="w-full h-full object-contain bg-gradient-to-br from-gray-100 to-gray-200"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='337' viewBox='0 0 600 337' fill='none'%3E%3Crect width='600' height='337' fill='%23F3F4F6'/%3E%3Ctext x='300' y='168.5' font-family='system-ui' font-size='24' text-anchor='middle' fill='%236B7280'%3EProject ${index + 1}%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 font-bold text-xs transform rotate-0 origin-top-right shadow-lg">FEATURED PROJECT</div>
              </div>
              <div className="p-8">
                <p className="mb-6 text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => {
                    const tagColors = [
                      "bg-blue-600", 
                      "bg-purple-600", 
                      "bg-emerald-600",
                      "bg-amber-600"
                    ];
                    return (
                      <span 
                        key={tagIndex} 
                        className={`px-3 py-1 ${tagColors[tagIndex % tagColors.length]} text-white font-bold text-sm`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold inline-flex items-center px-6 py-3 border-2 border-black bg-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all transform hover:-translate-y-1 duration-300 shadow-md hover:shadow-lg"
                >
                  VIEW PROJECT
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:animate-pulse" />
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
            className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold px-8 py-4 text-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:-translate-y-1 duration-300 shadow-lg rounded-sm"
          >
            VIEW ALL PROJECTS
            <ArrowRight className="h-5 w-5 ml-2 animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
