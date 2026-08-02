import React from 'react';

const Skills = () => {
  const categories = [
    {
      label: '_FRONTEND',
      skills: ['Angular / React', 'TypeScript', 'Next.js', 'HTML5 / CSS3 / SASS', 'RxJS', 'Tailwind CSS'],
    },
    {
      label: '_BACKEND',
      skills: ['NestJS / Node.js', 'Laravel', 'API REST / GraphQL', 'JWT', 'TypeORM / Prisma'],
    },
    {
      label: '_DATA_&_DEVOPS',
      skills: ['PostgreSQL / MySQL', 'SQL Server', 'Docker', 'GitLab CI/CD', 'GitHub Actions'],
    },
    {
      label: '_MÉTHODES',
      skills: ['SOLID / Clean Code', 'Jest / Cypress', 'Scrum / Kanban', 'Jira / Azure DevOps', 'Confluence / Notion'],
    },
  ];

  return (
    <section id="skills" className="shell section-block">
      <div className="mb-20">
        <h2 className="section-label">
          <span className="num">03/</span> COMPÉTENCES
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {categories.map((category) => (
          <div
            key={category.label}
            className="border border-outline-variant/20 p-8 hover:border-primary/50 transition-colors"
          >
            <p className="font-tech text-code-sm text-primary mb-4">
              {category.label}
            </p>
            <ul className="space-y-2 text-body-sm text-on-surface-variant list-none p-0 m-0">
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
