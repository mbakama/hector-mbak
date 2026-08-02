import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Je vous répondrai bientôt.');
    setFormData({ name: '', message: '' });
  };

  return (
    <section id="contact" className="shell section-block border-t border-outline-variant/20">
      <div className="mb-12">
        <h2 className="section-label">
          <span className="num">05/</span> CONTACT
        </h2>
      </div>

      <div className="asymmetric-grid items-end">
        <div className="col-span-12 md:col-span-6">
          <h3 className="font-display text-headline-lg mb-12">
            Parlons de votre prochain projet.
          </h3>
          <div className="space-y-8">
            <div>
              <p className="font-tech text-code-sm text-on-surface-variant uppercase mb-1">
                Email_
              </p>
              <a
                href="mailto:hectormbakama92@gmail.com"
                className="font-sans text-headline-md text-primary hover:underline underline-offset-8"
              >
                hectormbakama92@gmail.com
              </a>
            </div>
            <div>
              <p className="font-tech text-code-sm text-on-surface-variant uppercase mb-1">
                Téléphone_
              </p>
              <a
                href="tel:+243814532227"
                className="font-sans text-headline-md text-on-surface hover:text-primary transition-colors"
              >
                +243 814 532 227
              </a>
            </div>
            <div>
              <p className="font-tech text-code-sm text-on-surface-variant uppercase mb-1">
                Localisation_
              </p>
              <p className="text-body-lg text-on-surface">
                Kinshasa, République Démocratique du Congo
              </p>
            </div>
            <div className="flex gap-8">
              <a
                href="https://github.com/mbakama"
                target="_blank"
                rel="noopener noreferrer"
                className="font-tech text-tech-label text-on-surface-variant hover:text-primary transition-colors"
              >
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/hector-mbakama-bb1696276/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-tech text-tech-label text-on-surface-variant hover:text-primary transition-colors"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 md:col-start-8 mt-20 md:mt-0">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="font-tech text-code-sm text-on-surface-variant block mb-2 uppercase"
              >
                Nom_
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary outline-none transition-colors py-2 px-0 text-body-sm text-on-surface placeholder:text-on-surface-variant/40"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="font-tech text-code-sm text-on-surface-variant block mb-2 uppercase"
              >
                Message_
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Décrivez votre projet..."
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary outline-none transition-colors py-2 px-0 text-body-sm text-on-surface placeholder:text-on-surface-variant/40 resize-y"
              />
            </div>
            <button type="submit" className="btn-outline">
              Envoyer la requête
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
