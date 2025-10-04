'use client';

import Link from 'next/link';
// Importer les icônes nécessaires
import { 
  FiChevronRight, 
  FiClock,
  FiBriefcase,
  FiAward,
  FiCode,
  FiDatabase,
  FiShare2
} from 'react-icons/fi';
import { 
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiGit
} from 'react-icons/si';

// Importer les mêmes fichiers CSS que la page Testeur
import '../css/course-page.css';
import '../css/starfield-hero.css';

const courseName = "Formation Développeur";
const courseDescription = "Devenez un développeur full-stack capable de créer des applications web complètes, de l'interface utilisateur à la base de données.";

const DeveloppeurPage = () => {
  const courseJsonLd = { /* ... */ };

  // Le nouveau programme, avec des icônes de technologies de développement
  const curriculum = [
    { icon: <FiCode />, title: "Module 1: Les Fondamentaux du Web", content: "Maîtrisez HTML5, CSS3 (Flexbox, Grid) et JavaScript moderne (ES6+) pour bâtir des bases solides." },
    { icon: <SiReact />, title: "Module 2: Front-End avec React & Next.js", content: "Créez des interfaces utilisateur dynamiques, réactives et optimisées pour le SEO." },
    { icon: <SiNodedotjs />, title: "Module 3: Back-End avec Node.js & Express", content: "Construisez des serveurs performants et des logiques métier robustes côté serveur." },
    { icon: <FiDatabase />, title: "Module 4: Bases de Données SQL & NoSQL", content: "Apprenez à modéliser et interagir avec PostgreSQL et MongoDB pour gérer vos données." },
    { icon: <FiShare2 />, title: "Module 5: Création d'API RESTful", content: "Concevez des API sécurisées et bien structurées pour faire communiquer vos services." },
    { icon: <SiDocker />, title: "Module 6: Déploiement & DevOps", content: "Utilisez Docker pour conteneuriser vos applications et déployez-les sur Vercel." },
    { icon: <SiGit />, title: "Module 7: Méthodologie Agile & Git", content: "Travaillez en équipe efficacement avec les meilleures pratiques de versioning et de gestion de projet." },
    { icon: <FiAward />, title: "Module 8: Projet Full-Stack et Certification", content: "Réalisez un projet complet de A à Z pour valider vos compétences et obtenir votre certification." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      
      {/* Le hero "Vitesse Lumière" est réutilisé */}
      <header className="starfield-hero-section">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="hero-content">
          <p className="hero-breadcrumb">Formations / Développement Web</p>
          <h1 className="course-title">{courseName}</h1>
          <p className="course-subtitle">{courseDescription}</p>
        </div>
      </header>

      {/* La structure du contenu principal est identique */}
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
                  <h3>Prêt à devenir un créateur ?</h3>
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
        
        {/* La section finale est aussi réutilisée */}
        <section className="next-steps-section">
            <div className="container">
                <h2>Prêt à Construire le Web de Demain ?</h2>
                <p>N'attendez plus pour transformer votre passion pour le code en une expertise recherchée par les meilleures entreprises.</p>
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

export default DeveloppeurPage;