import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface py-section-gap border-t border-outline-variant/20">
      <div className="shell grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
        <div className="md:col-span-4">
          <div className="font-tech text-tech-label text-on-surface mb-4">
            HECTOR_MBAKAMA
          </div>
          <p className="font-tech text-code-sm text-on-surface-variant opacity-60 mb-2">
            Développeur Fullstack TypeScript
          </p>
          <p className="font-tech text-code-sm text-on-surface-variant opacity-60">
            © {new Date().getFullYear()} KINSHASA, RDC // ALL RIGHTS RESERVED
          </p>
        </div>
        <div className="md:col-span-8 flex flex-wrap md:justify-end gap-8 mt-6 md:mt-0">
          <a
            href="https://github.com/mbakama"
            target="_blank"
            rel="noopener noreferrer"
            className="font-tech text-tech-label text-on-surface-variant hover:text-primary hover:underline underline-offset-4 transition-all"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hector-mbakama-bb1696276/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-tech text-tech-label text-on-surface-variant hover:text-primary hover:underline underline-offset-4 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hectormbakama92@gmail.com"
            className="font-tech text-tech-label text-on-surface-variant hover:text-primary hover:underline underline-offset-4 transition-all"
          >
            Email
          </a>
          <a
            href="tel:+243814532227"
            className="font-tech text-tech-label text-on-surface-variant hover:text-primary hover:underline underline-offset-4 transition-all"
          >
            Phone
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
