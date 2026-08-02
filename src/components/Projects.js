import React from 'react';
import draftlioImage from '../assets/images/draftlio.png';
import amaniImage from '../assets/images/amani.png';
import project1Image from '../assets/images/project1.svg';
import project2Image from '../assets/images/project2.svg';
import project3Image from '../assets/images/project3.svg';
import unipilotImage from '../assets/images/unipilot.png';

const Projects = () => {
  const projects = [
    {
      title: 'Draftio',
      meta: 'SaaS — Devis Professionnels',
      description:
        'Plateforme SaaS pour freelances et PME : création de devis, gestion clients, facturation et suivi des statuts. UI responsive Next.js + API NestJS sécurisée JWT.',
      technologies: [
        'Next.js',
        'NestJS',
        'TypeScript',
        'PostgreSQL',
        'TypeORM',
        'Tailwind',
      ],
      image: draftlioImage,
      status: 'STATUS: LIVE',
      href: 'https://draftio-alpha.vercel.app/',
      align: 'left',
    },
    {
      title: 'ERP-DGI',
      meta: 'Gestion Fiscale Intégrée',
      description:
        'Système intégré de gestion fiscale : modules de contrôle et d’exonération, interfaces Angular reliées aux services backend, optimisation des requêtes SQL Server.',
      technologies: ['Angular', 'Laravel', 'SQL Server'],
      image: project2Image,
      status: 'BUILD: STABLE',
      href: '#projects',
      align: 'right',
    },
    {
      title: 'eRecettes (DGRK)',
      meta: 'Recettes Publiques',
      description:
        'Plateforme de gestion des recettes publiques : processus métier (contribuables, patrimoines), APIs REST, intégration front/back en environnement Agile Scrum.',
      technologies: ['Angular', 'NestJS', 'Laravel', 'SQL Server'],
      image: project3Image,
      status: 'STATUS: DEPLOYED',
      href: 'https://erecettes.cd/#/',
      align: 'left',
    },
    {
      title: 'UniPilot',
      meta: 'SaaS Universitaire Multi-tenant',
      description:
        'Plateforme SaaS multi-tenant pour l’enseignement supérieur : étudiants, enseignants, facultés, inscriptions, paiements en ligne et impression de cartes étudiantes. Architecture modulaire, JWT et APIs REST scalables.',
      technologies: ['Angular', 'Laravel', 'MySQL'],
      image: unipilotImage,
      status: 'STATUS: LIVE',
      href: 'https://api-universite-distributeur-dev.apps.kubedev.hologram.cd/login',
      align: 'right',
    },
    {
      title: 'Amani',
      meta: 'PWA — Partage Musical Bahá’í (RDC)',
      description:
        'Application web progressive pour les musiciens bahá’ís de RDC : publier des morceaux (fichier ou lien), annoncer des lives et événements, et permettre à tous d’écouter sans compte. Architecture évolutive prévue pour slam, poésie et d’autres formes d’art.',
      technologies: ['Next.js', 'NestJS', 'TypeScript', 'PWA', 'Cloud Storage'],
      image: amaniImage,
      status: 'STATUS: MVP',
      href: 'https://github.com/mbakama/amani',
      align: 'left',
    },
    {
      title: 'Bahá’í Community',
      meta: 'Portail Communautaire — Élections & Recensement',
      description:
        'Portail de gestion communautaire bahá’íe : recensement, élections (délégués & ASL), vote personnel, notifications temps réel, activités et administration. Monorepo Angular + NestJS avec parcours électeur mobile-first.',
      technologies: [
        'Angular',
        'NestJS',
        'Prisma',
        'PostgreSQL',
        'PrimeNG',
        'Tailwind',
      ],
      image: project1Image,
      status: 'STATUS: IN DEV',
      href: 'https://github.com/mbakama/bahai-community',
      align: 'right',
    },
  ];

  return (
    <section id="projects" className="shell section-block">
      <div className="mb-20">
        <h2 className="section-label">
          <span className="num">01/</span> PROJETS
        </h2>
      </div>

      <div className="space-y-32">
        {projects.map((project) => {
          const isRight = project.align === 'right';
          const isExternal = project.href.startsWith('http');

          return (
            <article key={project.title} className="asymmetric-grid group">
              <div
                className={[
                  'col-span-12 overflow-hidden',
                  isRight
                    ? 'md:col-span-7 md:col-start-6 md:order-2'
                    : 'md:col-span-7',
                ].join(' ')}
              >
                <div className="relative w-full aspect-video bg-surface-container-highest">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className={[
                      'absolute top-4 font-tech text-code-sm bg-surface/80 px-2 py-1',
                      isRight ? 'right-4' : 'left-4',
                    ].join(' ')}
                  >
                    {project.status}
                  </div>
                </div>
              </div>

              <div
                className={[
                  'col-span-12 flex flex-col justify-center mt-8 md:mt-0',
                  isRight
                    ? 'md:col-span-4 md:col-start-1 md:order-1 md:text-right'
                    : 'md:col-span-4 md:col-start-9',
                ].join(' ')}
              >
                <h3 className="font-sans text-[32px] md:text-headline-lg mb-2">
                  {project.title}
                </h3>
                <p className="font-tech text-tech-label text-primary mb-6 uppercase">
                  {project.meta}
                </p>
                <p className="text-body-sm text-on-surface-variant mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div
                  className={[
                    'flex flex-wrap gap-2 mb-8',
                    isRight ? 'md:justify-end' : '',
                  ].join(' ')}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-code-sm font-tech text-on-surface-variant border-b border-outline-variant pb-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className={[
                    'inline-flex items-center text-primary font-tech text-tech-label uppercase tracking-widest hover:gap-4 transition-all duration-300 gap-2',
                    isRight ? 'md:flex-row-reverse' : '',
                  ].join(' ')}
                >
                  View Project <span>{isRight ? '<-' : '->'}</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
