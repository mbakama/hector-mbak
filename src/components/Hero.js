import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="shell min-h-[80vh] flex flex-col justify-center relative pt-28 pb-16 overflow-hidden"
    >
      {/* Background watermark — fitted to first viewport */}
      <div
        className="pointer-events-none select-none absolute right-0 top-24 z-0 flex h-[calc(80vh-6rem)] items-center pr-3 md:pr-8"
        aria-hidden="true"
      >
        <span
          className="font-tech leading-none tracking-[0.12em] text-on-surface/[0.12] whitespace-nowrap [writing-mode:vertical-rl] rotate-180"
          style={{ fontSize: 'clamp(1.25rem, calc((80vh - 8rem) / 12), 3.75rem)' }}
        >
          SYSTEM_v4.0
        </span>
      </div>

      <div className="asymmetric-grid w-full relative z-10">
        <div className="col-span-12 md:col-span-10 lg:col-span-8">
          <p className="font-tech text-tech-label text-primary mb-4 uppercase tracking-widest opacity-80">
            Fullstack TypeScript // Angular, React, NestJS, Laravel, Next.js
          </p>
          <h1 className="font-display text-[40px] sm:text-[64px] md:text-display leading-none mb-8 tracking-tighter">
            HECTOR <span className="text-primary italic">MBAKAMA</span>
            <span className="cursor-blink" aria-hidden="true" />
          </h1>
          <p className="font-sans text-body-lg text-on-surface-variant max-w-xl mb-12 leading-relaxed">
            Développeur Fullstack basé à Kinshasa avec plus de 3 ans
            d&apos;expérience dans le développement d&apos;applications web
            modernes. Passionné par les architectures logicielles, je conçois
            des solutions robustes et évolutives en utilisant Angular, NestJS,
            Laravel, TypeScript, PHP, SQL et Docker, dans des environnements
            Agile (Scrum/Kanban).
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              Voir les projets
            </a>
            <a
              href={`/cv-hector-mbakama.pdf?v=${Date.now()}`}
              download="Hector-Mbakama-CV.pdf"
              className="btn-ghost"
            >
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
