'use client'; // <-- Assurez-vous que c'est bien présent

import Link from 'next/link';
import { FiCode, FiShield, FiCheckCircle, FiTrendingUp, FiAward, FiUsers } from 'react-icons/fi';
import { useEffect } from 'react'; // <-- Importez useEffect


const StyledCodeEditor = () => {
  const codeSnippet = `
// Bienvenue dans votre avenir.js
import { Student, Ambition } from '@ecole-lyon';

/**
 * Transforme un étudiant motivé en expert de la Tech.
 * @param {Student} student - Le candidat qui rejoint l'aventure.
 * @returns {Promise<Developer>} Une promesse de réussite.
 */
const startTraining = (student) => {
  if (!student.has(Ambition)) {
    return console.error("L'ambition est requise !");
  }

  const newSkills = ['React', 'Node.js', 'Sécurité', 'Tests Auto'];
  
  return new Promise((resolve) => {
    student.learn(newSkills);
    student.isHired = true;
    resolve(student.toDeveloper());
    // Votre carrière commence maintenant.
  });
};

startTraining(new Student('Vous'));
  `;
  const highlightSyntax = (code: string) => { return code .replace(/</g, '&lt;') .replace(/>/g, '&gt;') .replace(/\/\/(.*)/g, '<span class="token-comment">//$1</span>') .replace(/\/\*\*([\s\S]*?)\*\//g, '<span class="token-comment">/**$1*/</span>') .replace(/'([^']*)'/g, '<span class="token-string">\'$1\'</span>') .replace(/\b(const|let|var|import|from|if|return|new|Promise|async|await|export|default)\b/g, '<span class="token-keyword">$1</span>') .replace(/\b(startTraining|student|console|error|learn|resolve)\b/g, '<span class="token-function">$1</span>') .replace(/\b(Student|Ambition|Developer)\b/g, '<span class="token-class-name">$1</span>'); };
  return (
    <div className="code-window">
      <div className="window-header">
        <div className="traffic-lights">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="window-title">votre-avenir.js</div>
      </div>
      <div className="window-body">
        <pre><code dangerouslySetInnerHTML={{ __html: highlightSyntax(codeSnippet) }} /></pre>
      </div>
    </div>
  );
};


export default function Home() {

  // NOUVEL AJOUT : Script pour l'effet de halo
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll<HTMLElement>('.card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    
    // On attache l'événement au conteneur des cartes pour optimiser
    const cardsContainer = document.getElementById('formations');
    cardsContainer?.addEventListener('mousemove', handleMouseMove);

    return () => {
      cardsContainer?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="hero-section">
        { /* ... (votre section hero reste identique) ... */ }
        <div className="hero-container">
          <div className="hero-text-content">
            <h1 className="hero-title">
              Entrez dans la nouvelle dimension de la Tech
            </h1>
            <p className="hero-subtitle">
              À Lyon, nos formations intensives vous propulsent au sommet de votre carrière en 4 mois.
            </p>
            <ul className="hero-features">
              <li><FiTrendingUp /> Immersion totale</li>
              <li><FiAward /> Compétences de pointe</li>
              <li><FiUsers /> Mentors experts</li>
              <li><FiCheckCircle /> Trouver du travail</li>
            </ul>
            <div className="hero-buttons">
              <Link href="#formations" className="btn btn-primary" onClick={handleScroll}>
                Commencer l'aventure ↓
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Nous Contacter
              </Link>
            </div>
          </div>
          <div className="hero-visual-content">
            <StyledCodeEditor />
          </div>
        </div>
        <div className="scroll-indicator">
            Scroll pour explorer
            <div className="arrow">↓</div>
        </div>
      </section>

      <section id="formations" className="formations-section">
        <div className="formations-container">
          <h2 className="section-title">Trois portails vers votre avenir numérique</h2>
          <div className="cards-grid">
            <article className="card">
              <div className="card-icon"><FiCheckCircle /></div>
              <h3 className="card-title">Testeur Logiciel</h3>
              <p className="card-text">
                Devenez le gardien de la qualité, maîtrisez l'automatisation et assurez la perfection de chaque application.
              </p>
              <Link href="/testeur" className="card-link">Explorer la formation &rarr;</Link>
            </article>
            <article className="card">
              <div className="card-icon"><FiCode /></div>
              <h3 className="card-title">Développeur Web</h3>
              <p className="card-text">
                Bâtissez des expériences web immersives et performantes avec les technologies les plus récentes.
              </p>
              <Link href="/developpeur" className="card-link">Explorer la formation &rarr;</Link>
            </article>
            <article className="card">
              <div className="card-icon"><FiShield /></div>
              <h3 className="card-title">Expert Cybersécurité</h3>
              <p className="card-text">
                Protégez les données, déjouez les menaces et devenez un pilier de la sécurité numérique.
              </p>
              <Link href="/cybersecurite" className="card-link">Explorer la formation &rarr;</Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}