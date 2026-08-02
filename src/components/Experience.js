import React from 'react';

const Experience = () => {
  const roles = [
    {
      period: '2023-04 — PRÉSENT',
      title: 'Développeur Fullstack',
      company: 'Hologram Identification Service · Kinshasa, RDC',
      description:
        'Analyse des besoins et spécifications techniques pour des modules de contrôle fiscal. Développement Fullstack TypeScript (Angular/PrimeNG, NestJS/Laravel), optimisation SQL Server, tests Jest, CI/CD GitLab et collaboration Agile Scrum.',
      highlights: [
        'Modules métier : gestion foncière, création de contribuables',
        'Assurance qualité (Jest) et code reviews',
        'Documentation technique et maintenance évolutive',
      ],
      current: true,
    },
  ];

  const education = [
    {
      period: '2017-10 — 2023-04',
      title: 'Licence — Anglais et Informatique des Affaires',
      place: 'Université de Kinshasa',
      detail:
        'Formation alliant linguistique et informatique de gestion.',
    },
    {
      period: '2021-09',
      title: 'Modélisation et conception de bases de données relationnelles',
      place: 'INPP — Microsoft SQL Server',
      detail:
        'Conception de schémas relationnels et optimisation de requêtes SQL.',
    },
  ];

  return (
    <section
      id="experience"
      className="shell section-block bg-surface-container-low/30"
    >
      <div className="mb-20">
        <h2 className="section-label">
          <span className="num">02/</span> EXPÉRIENCE
        </h2>
      </div>

      <div className="asymmetric-grid">
        <div className="col-span-12 md:col-start-3 md:col-span-8 relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-outline-variant opacity-30" />
          <div className="space-y-16 ml-8">
            {roles.map((role) => (
              <div key={role.period} className="relative">
                <div
                  className={[
                    'absolute -left-10 top-2 w-4 h-px',
                    role.current ? 'bg-primary' : 'bg-outline-variant',
                  ].join(' ')}
                />
                <p
                  className={[
                    'font-tech text-tech-label mb-2',
                    role.current ? 'text-primary' : 'text-on-surface-variant',
                  ].join(' ')}
                >
                  {role.period}
                </p>
                <h3 className="font-sans text-headline-md mb-1">{role.title}</h3>
                <p className="font-tech text-code-sm text-on-surface-variant mb-3">
                  {role.company}
                </p>
                <p className="text-body-sm text-on-surface-variant max-w-lg mb-4">
                  {role.description}
                </p>
                <ul className="space-y-2 list-none p-0 m-0">
                  {role.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-body-sm text-on-surface-variant flex gap-2"
                    >
                      <span className="text-primary font-tech">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 mb-12">
        <h2 className="section-label">
          <span className="num">02b/</span> FORMATION
        </h2>
      </div>

      <div className="asymmetric-grid">
        <div className="col-span-12 md:col-start-3 md:col-span-8 relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-outline-variant opacity-30" />
          <div className="space-y-12 ml-8">
            {education.map((item) => (
              <div key={item.title} className="relative">
                <div className="absolute -left-10 top-2 w-4 h-px bg-outline-variant" />
                <p className="font-tech text-tech-label text-on-surface-variant mb-2">
                  {item.period}
                </p>
                <h3 className="font-sans text-headline-md mb-1">{item.title}</h3>
                <p className="font-tech text-code-sm text-primary mb-2">
                  {item.place}
                </p>
                <p className="text-body-sm text-on-surface-variant max-w-lg">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
