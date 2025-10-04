'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
// Importer les icônes
import { 
  FiChevronRight, 
  FiClock,
  FiBriefcase,
  FiAward,
  FiShield,
  FiServer,
  FiSearch,
  FiCrosshair,
  FiKey,
  FiUsers,
  FiFileText
} from 'react-icons/fi';

// Importer les fichiers CSS nécessaires
import '../css/course-page.css';
import '../css/matrix-hero.css'; // Le nouveau style du header

const courseName = "Formation Expert Cybersécurité";
const courseDescription = "Apprenez à protéger les entreprises contre les cybermenaces. Maîtrisez les techniques de défense, de détection et de réponse aux incidents.";

const CyberSecuritePage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const courseJsonLd = { /* ... */ };

  // Logique de l'animation Matrix
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.offsetHeight; // Important pour la taille du header

      const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
      const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const nums = '0123456789';
      const alphabet = katakana + latin + nums;
      
      const fontSize = 16;
      const columns = Math.floor(canvas.width / fontSize);
      
      const rainDrops: number[] = [];
      for (let i = 0; i < columns; i++) {
        rainDrops[i] = 1;
      }

      const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < rainDrops.length; i++) {
          const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
          ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

          if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
          }
          rainDrops[i]++;
        }
        animationFrameId = window.requestAnimationFrame(draw);
      };
      draw();
    };

    setup();
    window.addEventListener('resize', setup);
    
    return () => {
      window.removeEventListener('resize', setup);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Le nouveau programme avec les icônes de cybersécurité
  const curriculum = [
    { icon: <FiShield />, title: "Module 1: Fondamentaux de la Cybersécurité", content: "Comprenez l'écosystème des menaces et les normes fondamentales comme l'ISO 27001." },
    { icon: <FiServer />, title: "Module 2: Sécurité des Réseaux et Systèmes", content: "Protégez les infrastructures, configurez les pare-feux et sécurisez les systèmes d'exploitation." },
    { icon: <FiSearch />, title: "Module 3: Analyse de Malwares", content: "Apprenez les techniques de base de la rétro-ingénierie pour comprendre les logiciels malveillants." },
    { icon: <FiCrosshair />, title: "Module 4: Tests d'Intrusion (Pentesting)", content: "Mettez-vous dans la peau d'un attaquant pour découvrir et corriger les vulnérabilités." },
    { icon: <FiKey />, title: "Module 5: Cryptographie et Sécurité Web", content: "Maîtrisez le chiffrement et protégez les applications web contre les attaques courantes (OWASP)." },
    { icon: <FiUsers />, title: "Module 6: Gestion des Identités (IAM)", content: "Contrôlez qui a accès à quoi au sein d'une organisation pour minimiser les risques." },
    { icon: <FiFileText />, title: "Module 7: Forensique et Réponse à Incident", content: "Collectez des preuves numériques après une attaque et coordonnez la réponse pour limiter les dégâts." },
    { icon: <FiAward />, title: "Module 8: Projet de Simulation d'Attaque/Défense", content: "Participez à un exercice 'Red Team' vs 'Blue Team' pour certifier vos compétences." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      
      {/* === NOUVEAU HERO "MATRIX" === */}
      <header className="matrix-hero-section">
        <canvas ref={canvasRef} id="matrix-canvas"></canvas>
        <div className="hero-content">
          <p className="hero-breadcrumb">Formations / Cybersécurité</p>
          <h1 className="course-title">{courseName}</h1>
          <p className="course-subtitle">{courseDescription}</p>
        </div>
      </header>

      {/* Le reste de la page conserve la même structure */}
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
                  <h3>Prêt à devenir un défenseur ?</h3>
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
                <h2>Prêt à Protéger le Monde Numérique ?</h2>
                <p>N'attendez plus pour transformer votre passion pour la sécurité en une expertise vitale pour toutes les entreprises.</p>
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

export default CyberSecuritePage;