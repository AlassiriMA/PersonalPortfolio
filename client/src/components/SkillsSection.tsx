interface Skill {
  name: string;
  level: number; // 1-4 where 4 is max
}

const SkillsSection = () => {
  const frontendSkills: Skill[] = [
    { name: "REACT", level: 4 },
    { name: "JAVASCRIPT", level: 4 },
    { name: "TYPESCRIPT", level: 3.5 },
    { name: "HTML/CSS", level: 4 }
  ];

  const backendSkills: Skill[] = [
    { name: "NODE.JS", level: 4 },
    { name: "EXPRESS", level: 4 },
    { name: "POSTGRESQL", level: 3.5 },
    { name: "API DESIGN", level: 4 }
  ];

  const otherSkills: Skill[] = [
    { name: "CLOUD DEPLOYMENT", level: 3.5 },
    { name: "DOCKER", level: 3 },
    { name: "PYTHON", level: 3 },
    { name: "GIT/GITHUB", level: 4 }
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
        
        <div className="grid md:grid-cols-3 gap-8">
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
          
          {/* Other Skills */}
          <div className="bg-white border-2 border-black p-8">
            <h3 className="text-2xl font-bold mb-6">OTHER</h3>
            <ul className="space-y-4">
              {otherSkills.map((skill, index) => (
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
