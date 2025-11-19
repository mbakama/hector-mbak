import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Développement Frontend",
      skills: ["React", "JavaScript", "HTML5 & CSS3", "Angular", "TypeScript"]
    },
    {
      title: "Développement Backend",
      skills: ["Node.js", "Python", "Express.js", "FAST API", "PHP", "Laravel", "APIs REST"]
    },
    {
      title: "Base de données & Outils",
      skills: ["Sql Server", "PostgreSQL", "MySql", "Git", "Docker",  "Firebase"]
    },
    {
      title: "Design & Autres",
      skills: ["Design UI/UX", "Figma", "Design Responsive", "Agile", "Tests", "DevOps"]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <h2>Compétences & Technologies</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <h3>{category.title}</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} style={{ 
                  padding: '0.3rem 0', 
                  color: '#666',
                  borderBottom: skillIndex < category.skills.length - 1 ? '1px solid #eee' : 'none'
                }}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;