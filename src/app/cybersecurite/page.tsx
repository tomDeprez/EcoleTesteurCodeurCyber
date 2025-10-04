import Link from 'next/link';
import Image from 'next/image';

const courseName = "Formation Expert Cybersécurité à Lyon";
const courseDescription = "Apprenez à protéger les entreprises contre les cybermenaces. Maîtrisez les techniques de défense, de détection et de réponse aux incidents.";

const CyberSecuritePage = () => {
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalCourse",
    "name": courseName,
    "description": courseDescription,
    "provider": {
      "@type": "Organization",
      "name": "EcoleTesteurCodeurCyber",
      "sameAs": "http://localhost:3000" // Replace with actual domain
    },
    "courseCode": "CYBER-LYON"
  };

  const curriculum = [
    "Introduction à la Cybersécurité et aux normes (ISO 27001)",
    "Sécurité des Réseaux et des Systèmes",
    "Analyse de malwares et rétro-ingénierie",
    "Tests d'intrusion (Pentesting) éthiques",
    "Cryptographie et sécurité des applications web",
    "Gestion des identités et des accès (IAM)",
    "Analyse forensique (Forensics) et réponse aux incidents",
  ];

  return (
    <div className="bg-background-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      
      {/* Hero Section */}
      <div className="relative py-20 sm:py-28 bg-background-light">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/img-tempo/cyber.png" // Re-using card image for hero
            alt="Illustration conceptuelle pour la Formation Expert Cybersécurité à Lyon"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-accent-primary">{courseName}</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-text-secondary">{courseDescription}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Curriculum */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-accent-primary mb-6">Programme de la formation</h2>
            <ul className="space-y-3">
              {curriculum.map((item, index) => (
                <li key={index} className="p-4 bg-background-light rounded-lg border border-border-color flex items-center">
                  <span className="text-accent-primary font-bold mr-4">&rarr;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Price & CTA */}
          <div>
            <aside className="sticky top-28 h-fit">
              {/* === NOUVELLE CARTE CTA AMÉLIORÉE === */}
              <div className="cta-card">
                <div className="cta-header">
                  <h3>Prêt à devenir un expert ?</h3>
                </div>

                <div className="cta-price-section">
                  <div className="price-value">
                    <span>1000€</span>
                    <span className="price-period">/ mois</span>
                  </div>
                  <p className="cta-info">Financement possible via Pôle Emploi, CPF et autres dispositifs.</p>
                </div>
                
                <Link href="/contact" className="btn btn-primary btn-glow w-full text-center">
                  Postuler maintenant <FiChevronRight className="inline ml-1" />
                </Link>

                <div className="cta-divider"></div>

                <div className="cta-features-grid">
                  <div className="feature-item">
                    <FiClock />
                    <span className="value">4 mois</span>
                    <span className="label">Intensifs</span>
                  </div>
                  <div className="feature-item">
                    <FiBriefcase />
                    <span className="value">Projet</span>
                    <span className="label">Professionnel</span>
                  </div>
                  <div className="feature-item">
                    <FiAward />
                    <span className="value">Certification</span>
                    <span className="label">Reconnue</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecuritePage;
