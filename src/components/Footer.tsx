import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-column">
          <h3 className="footer-logo">EcoleTesteurCodeurCyber</h3>
          <p>Notre campus : 123 Rue de la Tech, 69001 Lyon</p>
        </div>
        <div className="footer-column">
          <div className="social-links">
            <a href="#" className="social-link"><FiGithub /></a>
            <a href="#" className="social-link"><FiLinkedin /></a>
            <a href="#" className="social-link"><FiTwitter /></a>
          </div>
        </div>
        <div className="footer-column footer-links">
          <a href="#">Mentions Légales</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} EcoleTesteurCodeurCyber. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
