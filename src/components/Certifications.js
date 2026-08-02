import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Basics of Python',
      issuer: 'UniAthena × Cambridge International Qualifications (CIQ)',
      date: '21 juillet 2026',
      blockchainId: '5296-8648-4462',
      preview: '/certifications/basics-of-python.png',
      file: '/certifications/Hector_CR641_certificate.pdf',
      downloadName: 'Hector-Mbakama-Basics-of-Python.pdf',
    },
    {
      title: 'Basics of Digital Marketing',
      issuer: 'UniAthena × Cambridge International Qualifications (CIQ)',
      date: '28 juillet 2026',
      blockchainId: '4162-7192-8983',
      preview: '/certifications/basics-of-digital-marketing.png',
      file: '/certifications/Hector_CR923_certificate.pdf',
      downloadName: 'Hector-Mbakama-Basics-of-Digital-Marketing.pdf',
    },
  ];

  return (
    <section id="certifications" className="shell section-block">
      <div className="mb-20">
        <h2 className="section-label">
          <span className="num">04/</span> CERTIFICATIONS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {certifications.map((cert) => (
          <article
            key={cert.title}
            className="border border-outline-variant/20 hover:border-primary/50 transition-colors overflow-hidden group"
          >
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative aspect-[16/10] bg-surface-container-highest overflow-hidden"
            >
              <img
                src={cert.preview}
                alt={`Certificat — ${cert.title}`}
                className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <span className="absolute top-4 left-4 font-tech text-code-sm bg-surface/80 px-2 py-1">
                VERIFIED
              </span>
            </a>

            <div className="p-6 md:p-8">
              <p className="font-tech text-tech-label text-primary mb-2 uppercase">
                {cert.date}
              </p>
              <h3 className="font-sans text-headline-md mb-2">{cert.title}</h3>
              <p className="text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                {cert.issuer}
              </p>
              <p className="font-tech text-code-sm text-on-surface-variant mb-6">
                Blockchain ID_ {cert.blockchainId}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-tech text-tech-label uppercase tracking-widest hover:gap-4 transition-all duration-300 gap-2"
                >
                  Voir PDF <span>-&gt;</span>
                </a>
                <a
                  href={cert.file}
                  download={cert.downloadName}
                  className="inline-flex items-center text-on-surface-variant font-tech text-tech-label uppercase tracking-widest hover:text-primary transition-colors"
                >
                  Download
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
