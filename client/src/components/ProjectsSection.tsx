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
      title: "MINIMALIST DASHBOARD",
      description: "A clean, Swiss-inspired admin interface with bold typography and intuitive navigation.",
      tags: ["REACT", "TAILWIND", "UI DESIGN"],
      imageAlt: "Minimalist Dashboard Project",
      link: "#"
    },
    {
      title: "TYPOGRAPHY PORTFOLIO",
      description: "A showcase of typographic experiments emphasizing Swiss design principles and grid layouts.",
      tags: ["REACT", "CSS GRID", "TYPOGRAPHY"],
      imageAlt: "Typography Portfolio Project",
      link: "#"
    },
    {
      title: "E-COMMERCE CONCEPT",
      description: "A minimalist shopping experience with focus on typography and product presentation.",
      tags: ["REACT", "TAILWIND", "UX DESIGN"],
      imageAlt: "E-Commerce Concept Project",
      link: "#"
    },
    {
      title: "EDITORIAL WEBSITE",
      description: "A magazine-inspired web experience with strong grid layout and typographic hierarchy.",
      tags: ["REACT", "GRID", "EDITORIAL"],
      imageAlt: "Editorial Website Project",
      link: "#"
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
