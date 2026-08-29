import { Link } from 'react-router-dom';
import logo from '../../assets/images/shared/logo.png';
import instaIcon from '../../assets/images/shared/icon-instagram.png';
import linkedinIcon from '../../assets/images/shared/icon-linkedin.png';
import './Footer.css';
import { SITE_INFO } from '../../data/siteContent';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <img src={logo} alt="Hoopinkai" className="footer-logo" />
            <p className="footer-tagline">{SITE_INFO.tagline}</p>
          </div>

          <div className="footer-section footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Support Circles</Link></li>
              <li><Link to="/schooltours">School Tours</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/past-events">Past Events</Link></li>
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h4>Get in Touch</h4>
            <p>
              <a href={`tel:${SITE_INFO.phone}`}>{SITE_INFO.phone}</a>
            </p>
            <p>
              <a href={`https://wa.me/919970256379`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </p>
          </div>

          <div className="footer-section footer-socials">
            <h4>Follow</h4>
            <div className="social-links">
              <a href={SITE_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={instaIcon} alt="Instagram" />
              </a>
              <a href={SITE_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href={SITE_INFO.socials.substack} target="_blank" rel="noopener noreferrer" aria-label="Blog">
                <span className="blog-icon">📰</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hoopinkai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
