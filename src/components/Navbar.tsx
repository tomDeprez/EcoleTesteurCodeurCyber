'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Importer le nouveau fichier CSS
import '../app/css/navbar.css';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gère l'état de défilement pour l'effet de fond
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gère le menu burger et le défilement du body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Nettoyage au démontage du composant
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { href: '/', name: 'Accueil' },
    { href: '/testeur', name: 'Testeur Logiciel' },
    { href: '/developpeur', name: 'Développeur' },
    { href: '/cybersecurite', name: 'Cybersécurité' },
  ];

  return (
    <>
      <header className={`navbar ${isScrolled || isOpen ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link href="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
            Ecole<span className="logo-span">.</span>dev
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex nav-menu">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}>
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="nav-link nav-cta">
              Contact
            </Link>
          </nav>

          {/* Bouton Burger pour Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="burger-menu"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              <div className={`burger-icon ${isOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay du Menu Mobile */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-nav-link ${pathname === link.href ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
           <Link href="/contact" className="nav-link nav-cta mt-4" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;