import React from 'react';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import emailIcon from '../assets/icons/email.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/mbakama" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" style={{ width: '20px', marginRight: '5px' }} />
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" style={{ width: '20px', marginRight: '5px' }} />
          LinkedIn
        </a>
        <a href="mailto:your.email@example.com">
          <img src={emailIcon} alt="Email" style={{ width: '20px', marginRight: '5px' }} />
          Email
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Hector Mbakama. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;