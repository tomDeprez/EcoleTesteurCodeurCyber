'use client';

import Link from 'next/link';
import { 
  FiChevronRight, 
  FiCheckCircle, 
  FiBookOpen, 
  FiTarget, 
  FiZap, 
  FiAward,
  FiClock,
  FiBriefcase
} from 'react-icons/fi';
import { 
  SiCypress, 
  SiPostman, 
  SiJenkins, 
  SiJira 
} from 'react-icons/si';

// Importer les deux fichiers CSS nécessaires
import '../css/course-page.css';
import '../css/starfield-hero.css'; // NOUVEL IMPORT

const courseName = "Formation Testeur Logiciel";
const courseDescription = "Devenez un expert en assurance qualité, capable de garantir des applications sans bugs. Apprenez les méthodologies de test, l'automatisation et les outils qui dominent le marché.";

const TesteurPage = () => {
  const courseJsonLd = { /* ... */ };

  const curriculum = [
    { icon: <FiBookOpen />, title: "Module 1: Fondamentaux du Test Logiciel", content: "Maîtrisez les concepts clés de l'ISTQB et les principes de l'assurance qualité." },
    { icon: <FiTarget />, title: "Module 2: Tests Manuels et Stratégies", content: "Apprenez à concevoir et exécuter des plans de test efficaces pour tout type d'application." },
    { icon: <SiCypress />, title: "Module 3: Automatisation avec Cypress", content: "Bâtissez des scripts de test robustes pour les applications web modernes." },
    { icon: <SiPostman />, title: "Module 4: Tests d'API avec Postman", content: "Validez la logique métier et les endpoints de vos services back-end." },
    { icon: <FiZap />, title: "Module 5: Tests de Performance avec JMeter", content: "Simulez des charges utilisateurs pour garantir la scalabilité et la réactivité." },
    { icon: <SiJenkins />, title: "Module 6: Intégration Continue (CI/CD)", content: "Intégrez vos tests dans des pipelines automatisés avec Jenkins et GitLab CI." },
    { icon: <SiJira />, title: "Module 7: Gestion des Anomalies avec Jira", content: "Utilisez Jira pour un suivi précis des bugs et communiquez efficacement vos résultats." },
    { icon: <FiAward />, title: "Module 8: Projet Final et Certification", content: "Appliquez vos compétences sur un projet réel et préparez votre certification." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      
      {/* === NOUVEAU HERO "VITESSE LUMIÈRE" === */}
      <header className="starfield-hero-section">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="hero-content">
          <p className="hero-breadcrumb">Formations / Qualité Logicielle</p>
          <h1 className="course-title">{courseName}</h1>
          <p className="course-subtitle">{courseDescription}</p>
        </div>
      </header>

      <main className="course-main-content">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="section-heading">Votre parcours d'apprentissage</h2>
              <div className="curriculum-timeline">
                <ul>
                  {curriculum.map((item, index) => (
                    <li key={index} className="timeline-item">
                      <div className="timeline-dot">{item.icon}</div>
                      <div className="timeline-content">
                        <h3 className="timeline-title">{item.title}</h3>
                        <p className="timeline-text">{item.content}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <aside className="sticky top-28 h-fit">
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
                  <div className="feature-item"><FiClock /><span className="value">4 mois</span><span className="label">Intensifs</span></div>
                  <div className="feature-item"><FiBriefcase /><span className="value">Projet</span><span className="label">Professionnel</span></div>
                  <div className="feature-item"><FiAward /><span className="value">Certification</span><span className="label">Reconnue</span></div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        
        <section className="next-steps-section">
            <div className="container">
                <h2>Prêt à Lancer Votre Carrière ?</h2>
                <p>N'attendez plus pour transformer votre passion pour la tech en une expertise recherchée par les meilleures entreprises.</p>
                <div className="next-steps-buttons">
                    <Link href="/contact" className="btn btn-primary btn-glow">Postuler à la Formation</Link>
                    <Link href="/brochure" className="btn btn-secondary">Télécharger la brochure</Link>
                </div>
            </div>
        </section>
      </main>
    </>
  );
};

export default TesteurPage;