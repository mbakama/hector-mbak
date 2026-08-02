import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Certs' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 border-b border-outline-variant/20">
      <nav className="shell flex justify-between items-center py-4">
        <div className="font-tech text-tech-label font-bold text-on-surface uppercase tracking-widest">
          HECTOR_MBAKAMA
        </div>

        <button
          type="button"
          className="md:hidden text-primary text-2xl leading-none"
          aria-label="Menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul
          className={[
            'gap-8 items-center list-none m-0 p-0',
            menuOpen
              ? 'flex flex-col absolute top-full left-0 right-0 bg-surface border-b border-outline-variant/20 px-margin-mobile py-6'
              : 'hidden',
            'md:flex md:flex-row md:static md:bg-transparent md:border-0 md:p-0',
          ].join(' ')}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link" onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`/cv-hector-mbakama.pdf?v=${Date.now()}`}
              download="Hector-Mbakama-CV.pdf"
              onClick={closeMenu}
              className="inline-block ml-0 md:ml-4 px-4 py-2 bg-primary text-on-primary font-tech text-tech-label font-bold uppercase tracking-wider hover:opacity-85 transition-opacity"
            >
              DOWNLOAD_CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
