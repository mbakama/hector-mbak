import React from 'react';
import project1Image from '../assets/images/project1.svg';
import project2Image from '../assets/images/project2.svg';
import project3Image from '../assets/images/project3.svg';
import githubIcon from '../assets/icons/github.svg';
import externalLinkIcon from '../assets/icons/external-link.svg';

const Projects = () => {
  const projects = [
    {
      title: "Plateforme E-Commerce",
      description: "Une solution e-commerce full-stack construite avec React et Node.js, avec authentification utilisateur, intégration de paiement et tableau de bord administrateur.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: project1Image,
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Application de Gestion de Tâches",
      description: "Une application collaborative de gestion de tâches avec mises à jour en temps réel, fonctionnalité glisser-déposer et fonctionnalités de collaboration d'équipe.",
      technologies: ["React", "Firebase", "Material-UI"],
      image: project2Image,
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Tableau de Bord Météo",
      description: "Une application météo responsive qui fournit les conditions actuelles et les prévisions en utilisant des APIs externes avec de belles visualisations de données.",
      technologies: ["JavaScript", "Chart.js", "API Météo"],
      image: project3Image,
      liveLink: "https://app-met.netlify.app/",
      githubLink: "https://github.com/mbakama/meteo"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projets en vedette</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img 
                src={project.image} 
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div style={{ margin: '1rem 0' }}>
                <strong>Technologies:</strong> {project.technologies.join(', ')}
              </div>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <img src={externalLinkIcon} alt="Lien externe" style={{ width: '16px', marginRight: '5px' }} />
                  Démo en direct
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub" style={{ width: '16px', marginRight: '5px' }} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;