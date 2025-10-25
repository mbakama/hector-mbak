import React from 'react';
import profileImage from '../assets/images/fix2.png';

const About = () => {
  return (
    <section id="about" className="section">
      <h2>À propos de moi</h2>
      <div className="about-content">
        <div>
          <img
            src={profileImage}
            alt="Profil"
            className="profile-image"
            style={{ width: '300px', height: '300px', objectFit: 'cover' }}
          />
        </div>
        <div className="about-text">
          <p>
            Je suis un développeur passionné avec un amour pour la création de solutions innovantes
            et de belles expériences utilisateur. Avec une expertise dans les technologies web modernes,
            j'aime transformer des problèmes complexes en designs simples et élégants.
          </p>
          <p>
            Quand je ne code pas, vous pouvez me trouver en train d'explorer de nouvelles technologies,
            de contribuer à des projets open source, ou de profiter d'activités en plein air.
            Je crois en l'apprentissage continu et à rester à jour avec les dernières
            tendances de l'industrie.
          </p>
          <p>
            Je suis toujours excité de travailler sur des projets stimulants et de collaborer
            avec des personnes partageant les mêmes idées qui partagent une passion pour la technologie et l'innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;