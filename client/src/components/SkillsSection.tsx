interface Skill {
  name: string;
  level: number; // 1-4 where 4 is max
}

const SkillsSection = () => {
  const frontendSkills: Skill[] = [
    { name: "REACT", level: 4 },
    { name: "JAVASCRIPT", level: 4 },
    { name: "TYPESCRIPT", level: 3.5 },
    { name: "HTML/CSS", level: 4 },
    { name: "TAILWIND CSS", level: 4 },
    { name: "UI/UX DESIGN", level: 3.5 }
  ];

  const backendSkills: Skill[] = [
    { name: "NODE.JS", level: 4 },
    { name: "EXPRESS", level: 4 },
    { name: "POSTGRESQL", level: 3.5 },
    { name: "PYTHON", level: 3 },
    { name: "DJANGO/FLASK", level: 3 },
    { name: "PHP", level: 3 },
    { name: "C#/.NET", level: 3 }
  ];

  const devOpsSkills: Skill[] = [
    { name: "AWS", level: 3.5 },
    { name: "GOOGLE CLOUD", level: 3.5 },
    { name: "DOCKER", level: 3 },
    { name: "CI/CD", level: 3.5 },
    { name: "GIT/GITHUB", level: 4 },
    { name: "FIREBASE", level: 3.5 }
  ];
  
  const specialtySkills: Skill[] = [
    { name: "AI/TENSORFLOW", level: 3 },
    { name: "WEB3/ETHEREUM", level: 3 },
    { name: "TRADING BOTS", level: 3.5 },
    { name: "DRIZZLE ORM", level: 4 }
  ];

  // Convert skill level to width class
  const getWidthClass = (level: number) => {
    const baseWidth = 10; // Starting width in tailwind units
    const widthUnit = level;
    return `w-${baseWidth + widthUnit}`;
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-accent border-y border-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold">SKILLS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {/* Frontend Skills */}
          <div className="bg-white border-2 border-black p-8">
            <h3 className="text-2xl font-bold mb-6">FRONTEND</h3>
            <ul className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="font-bold">{skill.name}</span>
                  <div 
                    className={`${
                      skill.level === 4 ? 'w-16' :
                      skill.level === 3.5 ? 'w-14' :
                      skill.level === 3 ? 'w-12' :
                      skill.level === 2.5 ? 'w-10' : 'w-8'
                    } h-2 bg-black`}
                  ></div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Backend Skills */}
          <div className="bg-white border-2 border-black p-8">
            <h3 className="text-2xl font-bold mb-6">BACKEND</h3>
            <ul className="space-y-4">
              {backendSkills.map((skill, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="font-bold">{skill.name}</span>
                  <div 
                    className={`${
                      skill.level === 4 ? 'w-16' :
                      skill.level === 3.5 ? 'w-14' :
                      skill.level === 3 ? 'w-12' :
                      skill.level === 2.5 ? 'w-10' : 'w-8'
                    } h-2 bg-black`}
                  ></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* DevOps Skills */}
          <div className="bg-white border-2 border-black p-8">
            <h3 className="text-2xl font-bold mb-6">DEVOPS & CLOUD</h3>
            <ul className="space-y-4">
              {devOpsSkills.map((skill, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="font-bold">{skill.name}</span>
                  <div 
                    className={`${
                      skill.level === 4 ? 'w-16' :
                      skill.level === 3.5 ? 'w-14' :
                      skill.level === 3 ? 'w-12' :
                      skill.level === 2.5 ? 'w-10' : 'w-8'
                    } h-2 bg-black`}
                  ></div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Specialty Skills */}
          <div className="bg-white border-2 border-black p-8">
            <h3 className="text-2xl font-bold mb-6">SPECIALTIES</h3>
            <ul className="space-y-4">
              {specialtySkills.map((skill, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="font-bold">{skill.name}</span>
                  <div 
                    className={`${
                      skill.level === 4 ? 'w-16' :
                      skill.level === 3.5 ? 'w-14' :
                      skill.level === 3 ? 'w-12' :
                      skill.level === 2.5 ? 'w-10' : 'w-8'
                    } h-2 bg-black`}
                  ></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
