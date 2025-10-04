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
            <div className="sticky top-24">
              <div className="bg-background-light border border-border-color rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Prix de la formation</h3>
                <p className="text-4xl font-extrabold text-accent-primary mb-2">1000€</p>
                <p className="text-text-secondary mb-6">/ mois</p>
                <Link href="#" className="w-full inline-block bg-accent-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-accent-secondary transition-transform transform hover:scale-105">
                  Postuler maintenant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecuritePage;
