import React from 'react';
import profileImage from '../assets/images/2d81b856-2be2-4af8-bc7b-478cb1387021.png';

const About = () => {
  const stack = [
    'TypeScript',
    'Angular',
    'React',
    'Next.js',
    'NestJS',
    'Laravel',
    'PostgreSQL',
    'Docker',
  ];

  return (
    <section id="about" className="shell section-block">
      <div className="asymmetric-grid">
        <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
          <div className="relative aspect-square overflow-hidden rounded-xl border border-outline-variant/20">
            <img
              src={profileImage}
              alt="Hector Mbakama — Développeur Fullstack"
              className="w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        </div>

        <div className="col-span-12 md:col-start-6 md:col-span-7">
          <h2 className="section-label mb-8">
            <span className="num">00/</span> INTRODUCTION
          </h2>
          <div className="space-y-6">
            <p className="text-body-lg text-on-surface leading-relaxed">
              Développeur Fullstack avec plus de 3 ans d&apos;expérience dans la
              conception et le développement d&apos;applications web modernes.
              J&apos;interviens sur l&apos;ensemble du cycle de développement :
              interfaces utilisateur, services backend, bases de données, APIs REST
              et déploiement.
            </p>
            <p className="text-body-lg text-on-surface leading-relaxed">
              Je maîtrise Angular, TypeScript, JavaScript, NestJS, Laravel, PHP,
              SQL Server, MySQL, PostgreSQL, Docker, Git et les pipelines CI/CD.
              J&apos;applique les principes SOLID, Clean Code et les bonnes
              pratiques d&apos;architecture pour concevoir des applications
              performantes, sécurisées et évolutives.
            </p>
            <p className="text-body-lg text-on-surface leading-relaxed">
              Curieux et en apprentissage continu, j&apos;élargis actuellement mon
              expertise avec React, Next.js, les architectures microservices et le
              cloud afin de développer des plateformes SaaS modernes et évolutives.
            </p>
            <div className="pt-8">
              <p className="font-tech text-tech-label text-on-surface-variant mb-4 uppercase">
                Stack actuelle_
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 flex flex-wrap gap-8">
              <div>
                <p className="font-tech text-code-sm text-on-surface-variant uppercase mb-1">
                  Langues_
                </p>
                <p className="text-body-sm text-on-surface">
                  Français — Courant · Anglais — Technique
                </p>
              </div>
              <div>
                <p className="font-tech text-code-sm text-on-surface-variant uppercase mb-1">
                  Localisation_
                </p>
                <p className="text-body-sm text-on-surface">
                  Kinshasa, RDC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
