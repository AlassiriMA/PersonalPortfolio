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
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold">PROJECTS</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group border-2 border-black overflow-hidden hover:bg-accent transition-colors">
              <div className="aspect-video bg-black flex items-center justify-center">
                <p className="text-white font-bold">PROJECT IMAGE</p>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 border border-black font-bold text-sm">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="font-bold inline-flex items-center hover:underline">
                  VIEW PROJECT
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
